import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const CardDetails = ({
  brand,
  description,
  id,
  name,
  preview,
  price,
  addProduct,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ margin: "20px" }}>
      <Link to={`/product/${id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={brand}
            image={preview}
            title={brand}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <Typography variant="body3" color="textSecondary" component="p">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary">
          Remove
        </Button>
        <Button size="small" color="primary" onClick={addProduct}>
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardDetails;
