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

module.exports = router;
