import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/n5.jpg";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import sections from "./additional/data";
import SingleFeatures from "./additional/SingleFeatures";
import Image2 from "../../assets/n.jpg";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    "@media (max-width: 770px)": {
      backgroundImage: `linear-gradient(rgba(255, 255, 255,0.9),rgba(255, 255, 255,0.9)),url(${Image2})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",

      backgroundAttachment: "fixed",
    },
  },
  itemlist: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  h1: {
    fontSize: "42px",
    margin: "5px",
    letterSpacing: "2px",
    fontWeight: "400",
    color: "rgba(107,52,26,255)",
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
const Additional = () => {
  const classes = useStyles();
  return (
    <div id="usługi" className={classes.container}>
      <h1 className={classes.h1}>Usługi dodatkowe!</h1>

      <div className={classes.itemlist}>
        {sections.features.map((feature) => {
          return <SingleFeatures key={feature.id} {...feature} />;
        })}
      </div>
      <img className={classes.img} src={Image} alt="" />

      <div className={classes.navigations}>
        <a href="#wedding">
          <div className={classes.itemicon}>
            <MdOutlineAddCircleOutline
              style={{ color: "black", fontSize: "10px" }}
            />
          </div>
        </a>
        <a href="#eq">
          <div className={classes.itemicon}>
            <MdOutlineAddCircleOutline
              style={{ color: "black", fontSize: "10px" }}
            />
          </div>
        </a>
        <a href="#party">
          <div className={classes.itemicon}>
            <MdOutlineAddCircleOutline
              style={{ color: "black", fontSize: "10px" }}
            />
          </div>
        </a>
        <a href="#additional">
          <div className={classes.itemiconactive}>
            <MdOutlineAddCircleOutline
              style={{ color: "rgba(107,52,26,255)", fontSize: "10px" }}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Additional;
