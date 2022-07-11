import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  foods: [],
  mealsCategory: [],
  isLoading: true,
}

const foodsSlice = createSlice({
  name: "foods",
  initialState: initialValue,
  reducers: {
    getFoodsCatatlog(state, action) {
      state.foods = action.payload;
      state.isLoading = false;
    },
    getMealsCategory(state, action){
      state.mealsCategory = action.payload;
    },
    // deleteTodo(state, action) {
    //     state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    // },
    // toggleTodoCompleted(state, action) {
    //     const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
    //     toggledTodo.completed = !toggledTodo.completed;
    // },
    // editTodos(state, action) {
    //     state.edit = state.todos.filter(todo => todo.id === action.payload.id);
    //     state.editId = action.payload.id;
    // },
    // backEditTodos(state, action) {
    //     state.edit = state.todos.filter(todo => todo.id === action.payload.id);
    //     state.editId = "";
    // },
    // addEditTodo(state, action) {
    //     const editText = state.todos.find(todo => todo.id === action.payload.id);
    //     editText.text = action.payload.editTextTodo;
    //     editText.completed = false;
    //     state.editId = "";
    // }

  }
});

export const {
  getFoodsCatatlog,
  getMealsCategory,
  // deleteTodo,
  // toggleTodoCompleted,
  // editTodos,
  // backEditTodos,
  // addEditTodo
} = foodsSlice.actions;

export default foodsSlice.reducer;