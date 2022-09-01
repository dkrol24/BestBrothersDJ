import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "../../assets/n11.png";
import image2 from "../../assets/n12.png";
import Image3 from "../../assets/n.jpg";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "50vh",
    backgroundImage: `linear-gradient(rgba(255, 255, 255,0.9),rgba(255, 255, 255,0.9)),url(${Image3})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },

  info1: {
    display: "flex",
    flexDirection: "row",
    textAlign: "start",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
    width: "60%",
    "@media screen and (max-width: 700px)": {
      width: "90%",
      flexDirection: "column-reverse",
    },
  },
  info2: {
    display: "flex",
    flexDirection: "row",
    margin: "20px",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "start",
    width: "60%",
    "@media screen and (max-width: 700px)": {
      width: "90%",
      flexDirection: "column",
    },
  },
  imagediv: {
    width: "auto",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  head: {
    textAlign: "start",
  },
  h1: {
    fontSize: "24px",
    margin: "12px",
    padding: "10px",
    letterSpacing: "2px",
    fontWeight: "400",
    color: "rgb(46, 46, 46)",
    "@media (max-width: 1000px)": {
      fontSize: "20px",
    },
  },
  span: {
    fontSize: "42px",
    letterSpacing: "2px",
    fontWeight: "500",
    color: "rgba(107,52,26,255)",
  },
}));
const Info = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.info1}>
        <div className={classes.head}>
          <h1 className={classes.h1}>
            <span className={classes.span}>Jacek</span> - absolwent prywatnych
            szkół muzycznych w Zamościu i Biłgoraju. Ukończył studia wyższe na
            kierunku Muzykologia (specjalizacja: krytyka i dziennikarstwo
            muzyczne). Gra na saksofonie oraz gitarze.
          </h1>
        </div>
        <div className={classes.imagediv}>
          <img src={image2} alt="img" />
        </div>
      </div>
      <div className={classes.info2}>
        <div className={classes.imagediv}>
          <img src={image1} alt="img" />
        </div>
        <div className={classes.head}>
          <h1 className={classes.h1}>
            <span className={classes.span}>Eryk</span> - Absolwent prywatnej
            szkoły Yamaha w Zamościu, Państwowej Szkoły Muzycznej I stopnia w
            Biłgoraju i II stopnia w Lublinie. Multiinstrumentalista,potrafi
            zagrać na: trąbce, puzonie, akordeonie, pianinie, gitarze, perkusji.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Info;
