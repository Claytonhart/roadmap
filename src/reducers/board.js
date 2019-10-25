import {
  GET_BOARD,
  SET_COLUMN_ORDER,
  SET_TASK_IN_SAME_COLUMN,
  SET_TASK_IN_NEW_COLUMN,
  SET_COLUMN_TITLE,
  UPDATE_EXISTING_TASK,
  CREATE_NEW_TASK,
  DELETE_TASK
} from "../actions/types";

const initialState = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Get ready for work" },
    "task-3": { id: "task-3", content: "Add another todo" },
    "task-4": { id: "task-4", content: "Wash the dog" }
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
    },
    "column-3": {
      id: "column-3",
      title: "done",
      taskIds: []
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"]
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BOARD:
      return payload;
    case SET_COLUMN_ORDER: {
      return {
        ...state,
        columnOrder: payload
      };
    }
    case SET_TASK_IN_SAME_COLUMN: {
      return {
        ...state,
        columns: {
          ...state.columns,
          [payload.id]: payload
        }
      };
    }
    case SET_TASK_IN_NEW_COLUMN: {
      const { startColumn, finishColumn } = payload;

      return {
        ...state,
        columns: {
          ...state.columns,
          [startColumn.id]: startColumn,
          [finishColumn.id]: finishColumn
        }
      };
    }
    case SET_COLUMN_TITLE: {
      const { title, column } = payload;
      const { id } = column;

      return {
        ...state,
        columns: {
          ...state.columns,
          [id]: {
            ...state.columns[id],
            title
          }
        }
      };
    }
    case UPDATE_EXISTING_TASK: {
      const { task, content } = payload;
      const { id } = task;

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [id]: {
            ...state.tasks[id],
            content
          }
        }
      };
    }
    case CREATE_NEW_TASK: {
      const { column, content } = payload;
      const { id } = column;

      return {
        ...state,
        tasks: {
          ...state.tasks,
          "new-id": {
            id: "new-id",
            content
          }
        },
        columns: {
          ...state.columns,
          [id]: {
            ...state.columns[id],
            taskIds: ["new-id", ...state.columns[id].taskIds]
          }
        }
      };
    }
    case DELETE_TASK: {
      // takes column and task ids out as references
      // column = ex. column-1, task = ex. task-1
      const { column, task } = payload;
      const columnId = column.id;
      const taskId = task.id;

      // returns an object with all keys except the one matching taskId
      const newTasks = Object.keys(state.tasks).reduce((object, key) => {
        if (key !== taskId) {
          object[key] = state.tasks[key];
        }
        return object;
      }, {});

      // returns an array of strings, with the taskId filtered out
      const newTaskIds = state.columns[columnId].taskIds.filter(item => {
        return item !== taskId;
      });

      // construct new state with newTasks and newTaskIds
      const newState = {
        ...state,
        tasks: {
          ...newTasks
        },
        columns: {
          ...state.columns,
          [columnId]: {
            ...state.columns[columnId],
            taskIds: newTaskIds
          }
        }
      };

      return newState;
    }
    default:
      return state;
  }
}
