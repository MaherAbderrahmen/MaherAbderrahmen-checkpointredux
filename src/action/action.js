let nextTaskId = 0;


export const addTask = (task) => ({
    type: "ADD",
    payload: {
        taskId: nextTaskId++,
        task
    }
  });
  export const toggleTask = (taskId) => ({
    type: "TOGGLE",
    payload: taskId,
  });
  
  export const deleteTask = (taskId) => ({
    type: "DELETE",
    payload: taskId,
  });
  export const editTask = ({ description, newDescription }) => ({
    type: "EDIT",
    payload: { description, newDescription },
  });