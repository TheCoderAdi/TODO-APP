import { createReducer } from "@reduxjs/toolkit";

const intialState = {
  tasks: [],
};

export const taskReducer = createReducer(intialState, (builder) => {
  builder
    .addCase("ADD_TASK", (state, action) => {
      state.tasks.push({
        id: Date.now(),
        description: action.payload.description,
        completed: false,
        color: action.payload.color,
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    })
    .addCase("DELETE_TASK", (state, action) => {
      state.tasks = state.tasks.filter((note) => note.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    })
    .addCase("MARK_AS_COMPLETED", (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    })
    .addCase("GET_TASKS", (state, action) => {
      state.tasks = action.payload;
    });
});
