const sanatizeBoardState = board => {
  let { columns, tasks } = board;

  const newColumns = {};
  const newTasks = {};

  columns.forEach(column => {
    const id = column.id;
    newColumns[id] = column;
  });
  tasks.forEach(task => {
    const id = task.id;
    newTasks[id] = task;
  });

  return {
    tasks: { ...newTasks },
    columns: { ...newColumns },
    columnOrder: board.columnOrder
  };
};

export default sanatizeBoardState;
