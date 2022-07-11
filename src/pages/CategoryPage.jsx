import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import api from "../utils/Api";
import { getMealsCategory } from "../store/foodsSlice";

import { Preloader } from "../components/Preloader/Preloader";
import { MealsList } from "../components/MealsList/MealsList";

export const CategoryPage = () => {

  const { name } = useParams();
  const dispatch = useDispatch();
  const mealsCategory = useSelector(state => state.foods.mealsCategory);

  const handleGetMealsCategory = (meals) => {
    dispatch(getMealsCategory(meals))
  }

  useEffect(() => {
    api.getFilteredCategory(name)
      .then(data => handleGetMealsCategory(data.meals))
      .catch(err => console.error(err))
    // eslint-disable-next-line
  }, [name]);

  return (
    <>
      {!mealsCategory.length
        ? (
          <Preloader />
        ) : (
          <MealsList />
        )
      }
    </>
  )
}
