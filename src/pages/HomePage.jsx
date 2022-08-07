import { useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import { getFoodsCatalog, setFilteredCatalog, searchFilteredCatalog } from "../store/foodsSlice";
import { useDispatch, useSelector } from 'react-redux';
import api from "../utils/Api";

import { Preloader } from "../components/Preloader/Preloader";
import { CategoryList } from "../components/CategoryList/CategoryList";
import { Search } from "../components/Search/Search";

export const HomePage = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.foods.isLoading);
  const foods = useSelector(state => state.foods.foods);
  // const filteredCatalog = useSelector(state => state.foods.filteredCatalog);
  // console.log(filteredCatalog)
  const { pathname, search } = useLocation();
  const { push } = useHistory();
  // console.log(push)
  // console.log(pathname, search)
  const handleGetFoodsCatalog = (catalog) => {
    dispatch(getFoodsCatalog(catalog));
  }

  const handleSetFilteredCatalog = (catalog) => {
    dispatch(setFilteredCatalog(catalog));
  }

  const handleSearch = (str) => {
    dispatch(searchFilteredCatalog(str));
    push({
      pathname,
      search: `&search=${str}`
    })
  }

  useEffect(() => {
    api.getAllCategories()
      .then(data => {
        handleGetFoodsCatalog(data.categories);
        handleSetFilteredCatalog(search ?
          data.categories.filter(item =>
            item.strCategory
              .toLowerCase()
              .includes(search.split("=")[1].toLowerCase())
          ) : data.categories
        );
      })
      .catch(err => console.error(err))
    // eslint-disable-next-line
  }, [search]);


  return (
    <>
      <Search cb={handleSearch} />
      {isLoading && !foods.length ? <Preloader /> : <CategoryList />}
    </>
  )
}
