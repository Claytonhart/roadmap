const express = require("express");
const router = express.Router();

// @route   GET api/project
// @desc    project route
// @access  Public
router.get("/", (req, res) => res.send("project route"));

module.exports = router;
