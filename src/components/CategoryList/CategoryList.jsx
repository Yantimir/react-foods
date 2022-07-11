import { useSelector } from 'react-redux';
import { CategoryItem } from "../CategoryItem/CategoryItem";

import style from "./style.module.css";

export const CategoryList = () => {

  const catalog = useSelector(state => state.foods);

  return (
    <div className={style.cards}>
      {
        catalog.foods?.map(item => (
          <CategoryItem key={item.idCategory} {...item} />
        ))
      }
    </div>
  )
}
