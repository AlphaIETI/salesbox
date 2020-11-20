import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/styles";
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    minWidth: 345,
    maxHeight: 420,
    minHeight: 420,
  },
  media: {
    height: 300
  }
}));
export default function CardItem (props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          height="200"
          className={classes.media}
          image={props.pr.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.pr.brand}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.pr.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}