const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    id: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  { _id: false }
);

const ColumnSchema = new Schema(
  {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    taskIds: [String]
  },
  { _id: false }
);

const BoardSchema = new Schema(
  {
    tasks: [TaskSchema],
    columns: [ColumnSchema],
    columnOrder: [String]
  },
  { _id: false }
);

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "user"
    }
  ],
  board: BoardSchema,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Project = mongoose.model("project", ProjectSchema);
