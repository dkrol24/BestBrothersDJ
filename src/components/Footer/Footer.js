import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/n.jpg";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    minHeight: "20vh",
    justifyContent: "space-around",
    textAlign: "center",
    alignItems: "center",
    background: "rgba(186, 121, 57, 0.18)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(4px)",
    "@media screen and (max-width: 500px)": {
      flexDirection: "column",
    },
  },
  logo: {
    width: "200px",
    height: "200px",
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
  span: {
    fontSize: "42px",
    letterSpacing: "2px",
    fontWeight: "500",
    color: "rgba(107,52,26,255)",
  },
  p: {
    fontSize: "14px",
    margin: "5px",
    letterSpacing: "2px",
    lineHeight: "24px",
    fontWeight: "500",
    color: "rgb(46, 46, 46)",
    "@media (max-width: 1000px)": {
      fontSize: "10px",
    },
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img className={classes.img} src={Logo} alt="" />
      </div>
      <div>
        <h1>Kontakt</h1>
        <ul>
          <li>7 dni w tygodniu</li>
          <li>24 godziny</li>
          <li>782 540 062</li>
          <li>726 332 088</li>
          <li>dj.bestbrothers@gmail.com</li>
        </ul>
      </div>
      <div>
        <h1>Usługi</h1>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
          }}
        >
          <li>- Oprawa muzyczna błogosławieństwa</li>
          <li>- Oprawa muzyczna ślubu cywilnego</li>
          <li>- Napis LOVE</li>
          <li>- Ciężki dym</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
