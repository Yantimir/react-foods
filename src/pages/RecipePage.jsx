import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import api from "../utils/Api";
import { getRecipe } from "../store/foodsSlice";
import { Link, Breadcrumbs, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Preloader } from "../components/Preloader/Preloader";

export const RecipePage = () => {

  const { id } = useParams();
  const { goBack } = useHistory();
  const dispatch = useDispatch();
  const recipe = useSelector(state => state.foods.recipe);

  const handleGetRecipe = (meals) => {
    dispatch(getRecipe(meals))
  }

  useEffect(() => {
    api.getMealById(id)
      .then((data) => {
        handleGetRecipe(data.meals[0])
      })
      .catch(err => console.error(err))
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" sx={{ pl: "30px", mb: "30px" }}>
        <Link underline="hover" color="inherit" href="/">
          HOME
        </Link>
        <Link underline="hover" color="inherit" onClick={goBack} sx={{ cursor: "pointer" }}>
          Category
        </Link>
      </Breadcrumbs>
      {!recipe.idMeal ? <Preloader /> : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6 style={{ fontSize: "18px" }}>Category: {recipe.strCategory}</h6>
          {recipe.strArea
            ? <h6 style={{ fontSize: "18px" }}>Area: {recipe.strArea}</h6>
            : null
          }
          <p style={{maxWidth: "700px"}}>{recipe.strInstructions}</p>

          <TableContainer>
            <Table sx={{ minWidth: 250, maxWidth: 700 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Ingredient</TableCell>
                  <TableCell align="right">Measure</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(recipe).map(key => {
                  if (key.includes("Ingredient") && recipe[key]) {
                    return (
                      <TableRow
                        key={key}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {recipe[key]}
                        </TableCell>
                        <TableCell align="right">{
                          recipe[`strMeasure${key.slice(13)}`]
                        }</TableCell>
                      </TableRow>
                    );
                  }
                  return null;
                })}
              </TableBody>
            </Table>
          </TableContainer>

          {recipe.strYoutube ? (
            <div>
              <h5 style={{ fontSize: "18px" }}>Video Recipe</h5>
              <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} frameBorder="0" allowFullScreen></iframe>
            </div>
          ) : null}
        </div>
      )}
    </>
  )
}
