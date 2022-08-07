import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  CardContent,
  Card,
} from '@mui/material';

import { Link } from 'react-router-dom';

export const MealItem = ({ idMeal, strMeal, strMealThumb }) => {
  return (
    <Card>
      <Link to={`/meal/${idMeal}`} style={{ textDecoration: 'none', color: "inherit" }}>
        <CardActionArea>
          <img style={{ width: "100%" }} src={strMealThumb} alt={strMeal} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}
            >
              {strMeal}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Link to={`/meal/${idMeal}`} style={{ textDecoration: 'none' }}>
          <Button>
            Watch recipe
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
