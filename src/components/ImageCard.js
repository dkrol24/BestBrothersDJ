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
  h1: {
    fontSize: "22px",
    margin: "5px",
    letterSpacing: "2px",
    fontWeight: "400",
    color: "rgba(107,52,26,255)",
    "@media (max-width: 1000px)": {
      fontSize: "20px",
    },
  },
  p: {
    fontSize: "16px",
    margin: "5px",
    letterSpacing: "2px",
    lineHeight: "26px",
    fontWeight: "500",
    color: "black",
    "@media (max-width: 1100px)": {
      fontSize: "12px",
    },
  },

  span: {
    fontSize: "42px",
    letterSpacing: "2px",
    fontWeight: "500",
    color: "rgba(107,52,26,255)",
  },
});

const ImageCard = ({ place, checked }) => {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={place.imageUrl} />
        <CardContent>
          <h1 className={classes.h1}>{place.title}</h1>
          <p className={classes.p}>{place.description}</p>
        </CardContent>
      </Card>
    </Collapse>
  );
};

export default ImageCard;
