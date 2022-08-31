import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/n5.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { FaMusic } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { SiDiscogs } from "react-icons/si";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  h1: {
    fontSize: "24px",
    margin: "5px",
    letterSpacing: "2px",
    fontWeight: "400",
    color: "rgb(46, 46, 46)",
    "@media (max-width: 1000px)": {
      fontSize: "20px",
    },
  },
  navigations: {
    margin: "3px",
  },
  itemicon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    border: "3px solid black",
    borderRadius: "100%",
    width: "20px",
    height: "20px",
    marginTop: "5px",
  },
  itemiconactive: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    border: "3px solid rgba(107,52,26,255)",
    borderRadius: "100%",
    width: "20px",
    height: "20px",
    marginTop: "5px",
  },
}));
const Instruments = () => {
  const classes = useStyles();
  return (
    <div id="instruments" className={classes.container}>
      <h1 className={classes.h1}>Saksofon + Akordeon</h1>
      <div>
        <img className={classes.img} src={Image} alt="" />
      </div>
      <div className={classes.navigations}>
        <a href="#wedding">
          <div className={classes.itemicon}>
            <AiOutlineHeart style={{ color: "black", fontSize: "10px" }} />
          </div>
        </a>
        <a href="#eq">
          <div className={classes.itemicon}>
            <SiDiscogs style={{ color: "black", fontSize: "10px" }} />
          </div>
        </a>
        <a href="#party">
          <div className={classes.itemicon}>
            <GiPartyPopper style={{ color: "black", fontSize: "10px" }} />
          </div>
        </a>
        <a href="#instruments">
          <div className={classes.itemiconactive}>
            <FaMusic
              style={{ color: "rgba(107,52,26,255)", fontSize: "10px" }}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Instruments;
