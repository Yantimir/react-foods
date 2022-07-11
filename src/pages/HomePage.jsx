import { useEffect } from 'react';
import { getFoodsCatatlog } from "../store/foodsSlice";
import { useDispatch, useSelector } from 'react-redux';
import api from "../utils/Api";

import { Preloader } from "../components/Preloader/Preloader";
import { CategoryList } from "../components/CategoryList/CategoryList";

export const HomePage = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.foods.isLoading);

  const addCatalog = (catalog) => {
    dispatch(getFoodsCatatlog(catalog))
  }

  useEffect(() => {
    api.getAllCategories()
      .then(data => addCatalog(data.categories))
      .catch(err => console.log(err))
    // eslint-disable-next-line
  }, []);


  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <CategoryList />
      )}
    </>
  )
}
