const express = require("express");
const router = express.Router();

// @route   GET api/workspace
// @desc    workspace route
// @access  Public
router.get("/", (req, res) => res.send("workspace route"));

module.exports = router;
