const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "2Take out the garbage" },
    "task-3": { id: "task-3", content: "3Take out the garbage" },
    "task-4": { id: "task-4", content: "4Take out the garbage" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: []
    }
    // "column-3": {
    //   id: "column-3",
    //   title: "done",
    //   taskIds: []
    // }
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2"]
};

export default initialData;
