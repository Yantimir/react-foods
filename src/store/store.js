import { configureStore, combineReducers } from '@reduxjs/toolkit';
import foodsReducer from "../store/foodsSlice";

const rootReducer = combineReducers({
  foods: foodsReducer,
});

const store =  configureStore({
  reducer: rootReducer,
});

export default store;