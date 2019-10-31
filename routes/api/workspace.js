const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const auth = require("../../middleware/auth");

const Workspace = require("../../models/Workspace");

// @route   GET api/workspace
// @desc    get a user's workspaces & projects in each workspace
// @access  Private
router.get("/", auth, async (req, res) => {
  // get all of current user's workspaces by most recently created
  // and the projects in each workspace
  const userId = new ObjectId(req.user.id);
  try {
    const workspaces = await Workspace.find({ users: userId }).sort({
      date: -1
    });

    res.json(workspaces);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
