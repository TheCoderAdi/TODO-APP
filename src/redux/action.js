export const addTask = (task) => (dispatch) => {
  try {
    dispatch({ type: "ADD_TASK", payload: task });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (id) => (dispatch) => {
  try {
    dispatch({ type: "DELETE_TASK", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const markAsCompleted = (id) => (dispatch) => {
  try {
    dispatch({ type: "MARK_AS_COMPLETED", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const getAllTasks = () => (dispatch) => {
  try {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch({ type: "GET_TASKS", payload: tasks });
  } catch (error) {
    console.log(error);
  }
};
