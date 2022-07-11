import { useEffect } from 'react';
import { getFoodsCatatlog } from "../store/foodsSlice";
import { useDispatch, useSelector } from 'react-redux';
import api from "../utils/Api";

import { Preloader } from "../components/Preloader/Preloader";
import { CategoryList } from "../components/CategoryList/CategoryList";

export const HomePage = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.foods.isLoading);
  const foods = useSelector(state => state.foods.foods);

  const handleGetFoodsCatatlog = (catalog) => {
    dispatch(getFoodsCatatlog(catalog))
  }

  useEffect(() => {
    api.getAllCategories()
      .then(data => handleGetFoodsCatatlog(data.categories))
      .catch(err => console.error(err))
    // eslint-disable-next-line
  }, []);


  return (
    <>
      {isLoading && !foods.length
        ? (
          <Preloader />
        ) : (
          <CategoryList />
        )
      }
    </>
  )
}
