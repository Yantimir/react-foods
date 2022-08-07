import { useSelector } from "react-redux";
import style from "./style.module.css";
import { MealItem } from "../MealItem/MealItem";


export const MealsList = () => {

  const mealsCategory = useSelector(state => state.foods.mealsCategory);

  return (
    <div className={style.cards}>
      {
        mealsCategory?.map(meal => (
          <MealItem key={meal.idMeal} {...meal} />
        ))
      }
    </div>
  )
}
