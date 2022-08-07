import { useSelector } from 'react-redux';
import { CategoryItem } from "../CategoryItem/CategoryItem";
import style from "./style.module.css";

export const CategoryList = () => {

  // const catalog = useSelector(state => state.foods.foods);
  const filteredCatalog = useSelector(state => state.foods.filteredCatalog);

  return (
      <div className={style.cards}>
        {
          filteredCatalog?.map(item => (
            <CategoryItem key={item.idCategory} {...item} />
          ))
        }
      </div>
  )
}
