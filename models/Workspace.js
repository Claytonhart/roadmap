const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkspaceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "user"
    }
  ],
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "project"
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Workspace = mongoose.model("workspace", WorkspaceSchema);
