import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todoList.splice(state.todoList.indexOf(action.payload), 1);
    },
    updateTodo: (state, action) => {
      const todo = state.todoList.findIndex(action.payload.id);
      state.todoList[todo] = action.payload;
    },
  },
});
const { actions, reducer } = todoSlice;

export const { addTodo, updateTodo, deleteTodo } = actions;

export default reducer;
