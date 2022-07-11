import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  // CardMedia,
  CardContent,
  Card,
} from '@mui/material';

export const CategoryItem = ({ strCategory, strCategoryDescription, strCategoryThumb }) => {
  return (
    <Card>
      <CardActionArea>
        <img style={{ width: "100%" }} src={strCategoryThumb} alt={strCategory} />
        {/* <CardMedia
          component="img"
          height="250"
          image={strCategoryThumb}
          alt={strCategory}
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {strCategory}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {strCategoryDescription.slice(0, 120)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button>
          Watch category
        </Button>
      </CardActions>
    </Card>
  )
}
