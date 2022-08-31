import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import places from "../static/places";
import useWindowPosition from "../hook/useWindowPosition";
import Image2 from "../assets/n.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `linear-gradient(rgba(255, 255, 255,0.9),rgba(255, 255, 255,0.9)),url(${Image2})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition("start");
  return (
    <div className={classes.root} id="o nas">
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} />
    </div>
  );
}
