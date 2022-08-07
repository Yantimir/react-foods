import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  foods: [],
  mealsCategory: [],
  recipe: {},
  isLoading: true,
  filteredCatalog: []
}

const foodsSlice = createSlice({
  name: "foods",
  initialState: initialValue,
  reducers: {
    getFoodsCatalog(state, action) {
      state.foods = action.payload;
      state.isLoading = false;
    },
    getMealsCategory(state, action) {
      state.mealsCategory = action.payload;
    },
    getRecipe(state, action) {
      state.recipe = action.payload;
    },
    setFilteredCatalog(state, action) {
      state.filteredCatalog = action.payload;
    },
    searchFilteredCatalog(state, action) {
      state.filteredCatalog = state.filteredCatalog.filter(item => item.strCategory.toLowerCase().includes(action.payload.toLowerCase()))
    },
  }
});

export const {
  getFoodsCatalog,
  getMealsCategory,
  getRecipe,
  setFilteredCatalog,
  searchFilteredCatalog
} = foodsSlice.actions;

export default foodsSlice.reducer;