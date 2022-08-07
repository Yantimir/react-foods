import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import api from "../utils/Api";
import { getMealsCategory } from "../store/foodsSlice";

import { Preloader } from "../components/Preloader/Preloader";
import { MealsList } from "../components/MealsList/MealsList";
import { Link, Breadcrumbs } from '@mui/material';

export const CategoryPage = () => {

  const { name } = useParams();
  const { goBack } = useHistory();
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
      <Breadcrumbs aria-label="breadcrumb" sx={{ pl: "30px", mb: "30px" }}>
        <Link underline="hover" color="inherit" href="/">
          HOME
        </Link>
        <Link underline="hover" color="inherit" onClick={goBack} sx={{ cursor: "pointer" }}>
          Back
        </Link>
      </Breadcrumbs>
      {!mealsCategory.length ? <Preloader /> : <MealsList />}
    </>
  )
}
