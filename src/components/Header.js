import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import Image from "../assets/n1.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Nunito",
    width: "100%",
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6)),url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",

    "@media (max-width: 900px)": {
      backgroundAttachment: "scroll",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "60vh",
    },
  },

  colorText: {
    color: "yellow",
  },
  container: {
    textAlign: "center",
  },
  h1: {
    fontSize: "80px",
    margin: "5px",
    letterSpacing: "2px",
    fontWeight: "400",
    color: "white",
    "@media (max-width: 1000px)": {
      fontSize: "50px",
    },
  },
  goDown: {
    color: "yellow",
    fontSize: "4rem",
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="start">
      <div className="slide"></div>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 2000 } : {})}
        collapsedHeight={10}
      >
        <div className={classes.container}>
          <h1 className={classes.h1}>
            DJ & Wodzirej <br />
            Best <span className={classes.colorText}>Brothers.</span>
          </h1>
          <Scroll to="o nas" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
