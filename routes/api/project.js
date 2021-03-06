const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const auth = require('../../middleware/auth');

const Project = require('../../models/Project');
const User = require('../../models/User');

// @route   GET api/project
// @desc    get a user's projects (no board state)
// @access  Private
router.get('/', auth, async (req, res) => {
  // get all of current user's projects by most recently created
  const userId = new ObjectId(req.user.id);
  try {
    const projects = await Project.find({ users: userId })
      .select('-board')
      .sort({
        date: -1
      });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/project
// @desc    create a new project
// @access  Private
router.post('/', auth, async (req, res) => {
  // console.log(req.body);
  const userId = new ObjectId(req.user.id);
  const { name, board } = req.body;

  try {
    let project = new Project({
      name,
      users: [userId],
      board
    });

    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/project
// @desc    create a new project
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    // console.log(req.body);
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    // Check if user is authenticated
    // Check if project.users does not include current user's id
    const userId = new ObjectId(req.user.id);
    if (!project.users.includes(userId)) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await project.remove();

    res.json({ msg: 'Project successfully deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/project/:id
// @desc    get a project by id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    let project;
    // Check if the id is a 12 char string
    if (ObjectId.isValid(req.params.id)) {
      const newObjectId = new ObjectId(req.params.id).toString();
      if (newObjectId === req.params.id) {
        project = await Project.findById(req.params.id);
      }
    } else {
      return res.status(404).json({ msg: 'Invalid object id' });
    }
    // const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/project/:id/setColumnOrder
// @desc    project route
// @access  Public
router.put('/:id/setColumnOrder', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    const { columnOrder } = req.body;

    project.board.columnOrder = columnOrder;

    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/project/:id/setTaskInSameColumn
// @desc    project route
// @access  Public
router.put('/:id/setTaskInSameColumn', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    const { column } = req.body;
    const { id, taskIds } = column;

    // find the column by id and set its taskIds to the new order
    project.board.columns.forEach(column => {
      if (column.id === id) {
        column.taskIds = taskIds;
      }
    });

    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/project/:id/setTaskInNewColumn
// @desc    project route
// @access  Public
router.put('/:id/setTaskInNewColumn', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    const { startColumn, finishColumn } = req.body;

    const startId = startColumn.id;
    const startTaskIds = startColumn.taskIds;

    const finishId = finishColumn.id;
    const finishTaskIds = finishColumn.taskIds;

    // find the columns by id and set their taskIds to the new order
    project.board.columns.forEach(column => {
      if (column.id === startId) {
        column.taskIds = startTaskIds;
      }
      if (column.id === finishId) {
        column.taskIds = finishTaskIds;
      }
    });

    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/project/:id/setColumnTitle
// @desc    project route
// @access  Public
router.put('/:id/setColumnTitle', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    const { column, title } = req.body;
    const { id } = column;

    project.board.columns.forEach(column => {
      if (column.id === id) {
        column.title = title;
      }
    });

    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/project/:id/setTaskTitle
// @desc    project route
// @access  Public
router.put('/:id/setTaskTitle', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    const { task, content } = req.body;
    const { id } = task;

    project.board.tasks.forEach(task => {
      if (task.id === id) {
        task.content = content;
      }
    });

    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/project/:id/createNewTask
// @desc    project route
// @access  Public
router.put('/:id/createNewTask', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    const { column, content, taskId } = req.body;
    const columnId = column.id;

    // add new task to end of tasks
    project.board.tasks.push({ id: taskId, content });

    // add task to taskList in appropriate column (in the first position)
    project.board.columns.forEach(column => {
      if (column.id === columnId) {
        column.taskIds.unshift(taskId);
      }
    });

    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/project/:id/deleteTask/:columnId/:taskId
// @desc    project route
// @access  Public
router.delete('/:id/deleteTask/:columnId/:taskId', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    const taskId = req.params.taskId;
    const columnId = req.params.columnId;

    // remove task with taskId
    project.board.tasks.forEach((task, i) => {
      if (task.id === taskId) {
        project.board.tasks.splice(i, 1);
      }
    });

    // remove taskId string from appropriate column
    project.board.columns.forEach(column => {
      if (column.id === columnId) {
        column.taskIds.forEach((oldTaskId, i) => {
          if (oldTaskId === taskId) {
            column.taskIds.splice(i, 1);
          }
        });
      }
    });

    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/project/:id/createColumn
// @desc    project route
// @access  Public
router.put('/:id/createColumn', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    const { columnId, title } = req.body;

    // add new column to the end of the columns array
    project.board.columns.push({
      taskIds: [],
      id: columnId,
      title
    });

    // add new column's reference to the end of the columnOrder array
    project.board.columnOrder.push(columnId);

    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/project/:id/createColumn
// @desc    project route
// @access  Public
router.delete('/:id/deleteColumn/:columnId', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    const { columnId } = req.params;

    // const taskIdsToDelete = [...project.board.columns[columnId].taskIds];
    let taskIdsToDelete = [];

    project.board.columns.forEach(column => {
      if (column.id === columnId) {
        taskIdsToDelete = column.taskIds;
      }
    });

    project.board.columns.forEach((column, i) => {
      if (column.id === columnId) {
        project.board.columns.splice(i, 1);
      }
    });

    taskIdsToDelete.forEach(taskIdToDelete => {
      project.board.tasks.forEach((task, i) => {
        if (task.id === taskIdToDelete) {
          project.board.tasks.splice(i, 1);
        }
      });
    });

    project.board.columnOrder.forEach((column, i) => {
      if (column === columnId) {
        project.board.columnOrder.splice(i, 1);
      }
    });

    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/project/:id/users
// @desc    get a project's users
// @access  Private
router.get('/:id/users', auth, async (req, res) => {
  try {
    let project;
    // Check if the id is a 12 char string
    if (ObjectId.isValid(req.params.id)) {
      const newObjectId = new ObjectId(req.params.id).toString();
      if (newObjectId === req.params.id) {
        project = await Project.findById(req.params.id);
      }
    } else {
      return res.status(404).json({ msg: 'Invalid object id' });
    }
    // const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    const usersPromiseArray = project.users.map(async user => {
      const userName = await User.findById(new ObjectId(user)).select(
        '-password'
      );
      // returns null if no user
      return userName;
    });

    const userData = await Promise.all(usersPromiseArray);

    res.json(userData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/project/:id/users
// @desc    add a user / users to a project
// @access  Private
router.put('/:id/user', auth, async (req, res) => {
  try {
    const newUserId = new ObjectId(req.body.user);

    let project;
    // Check if the id is a 12 char string
    if (ObjectId.isValid(req.params.id)) {
      const newObjectId = new ObjectId(req.params.id).toString();
      if (newObjectId === req.params.id) {
        project = await Project.findById(req.params.id);
      }
    } else {
      return res.status(404).json({ msg: 'Invalid object id' });
    }

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    if (project.users.includes(newUserId)) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'User is already in this project' }] });
    }

    project.users = [...project.users, newUserId];

    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/project/:id/setProjectName
// @desc    udpate a project's name by id
// @access  Private
router.put('/:id/setProjectName', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    const { name } = req.body;

    project.name = name;

    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
