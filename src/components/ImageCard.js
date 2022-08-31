import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "620px",

    minHeight: "700px",
    background: "rgba(186, 121, 57, 0.18)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(4px)",
    margin: "20px",
  },
  media: {
    height: "410px",
    width: "100%",
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "black",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1rem",
    color: "rgb(46, 46, 46)",
  },
});

const ImageCard = ({ place, checked }) => {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={place.imageUrl} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {place.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
};

export default ImageCard;
