import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  CardContent,
  Card,
} from '@mui/material';

import { Link } from 'react-router-dom';

export const CategoryItem = ({ strCategory, strCategoryDescription, strCategoryThumb }) => {
  return (
    <Card>
      <Link to={`/category/${strCategory}`} style={{ textDecoration: 'none', color: "inherit" }}>
        <CardActionArea>
          <img style={{ width: "100%" }} src={strCategoryThumb} alt={strCategory} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {strCategory}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {strCategoryDescription.slice(0, 60)}...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Link to={`/category/${strCategory}`} style={{ textDecoration: 'none' }}>
          <Button>
            Watch category
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
