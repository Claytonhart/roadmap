const express = require("express");
const router = express.Router();

const Project = require("../../models/Project");

// @route   GET api/project
// @desc    project route
// @access  Public
router.get("/", (req, res) => res.send("project route"));

// @route   POST api/project
// @desc    project route
// @access  Public
router.post("/", async (req, res) => {
  // console.log(req.body);

  const { name, board } = req.body;

  try {
    let project = new Project({
      name,
      board
    });

    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/project/:id
// @desc    project route
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }

    res.json(project);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/project/:id/setColumnOrder
// @desc    project route
// @access  Public
router.put("/:id/setColumnOrder", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }

    const { columnOrder } = req.body;

    project.board.columnOrder = columnOrder;

    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/project/:id/setTaskInSameColumn
// @desc    project route
// @access  Public
router.put("/:id/setTaskInSameColumn", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
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
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/project/:id/setTaskInNewColumn
// @desc    project route
// @access  Public
router.put("/:id/setTaskInNewColumn", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
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
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/project/:id/setColumnTitle
// @desc    project route
// @access  Public
router.put("/:id/setColumnTitle", async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return res.status(404).json({ msg: "Project not found" });
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
});

module.exports = router;