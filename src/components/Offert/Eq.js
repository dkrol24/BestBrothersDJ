import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/n7.jpg";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  OffertContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "10px",
    minHeight: "70vh",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    height: "120px",
    padding: "20px",
    margin: "10px",
  },
  itemicon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    border: "3px solid yellow",
    borderRadius: "50%",
    padding: "19px",
  },
  h1: {
    fontSize: "42px",
    letterSpacing: "2px",
    fontWeight: "400",
    color: "yellow",
  },
  p2: {
    fontSize: "16px",
    letterSpacing: "2px",
    fontWeight: "400",
    color: "white",
    marginTop: "40px",
    lineHeight: "24px",
  },
  span: {
    fontSize: "20px",
    letterSpacing: "2px",
    fontWeight: "500",
    color: "yellow",
  },
}));
const Eq = () => {
  const classes = useStyles();
  return (
    <div id="stanowisko" className={classes.container}>
      <div className={classes.OffertContainer}>
        <h1 className={classes.h1}>Stanowisko</h1>
        <p className={classes.p2}>
          Nasze charakterystyczne rustykalne stanowisko idealnie wpasuje się w
          wystrój każdej sali, pokreśli urok wesela oraz{" "}
          <span className={classes.span}>zapewni elegancką prezentację.</span>
        </p>
        <p className={classes.p2}>
          Pracujemy tylko i wyłącznie na profesjonalnych systemach
          nagłośnieniowych amerykańskiej firmy{" "}
          <span className={classes.span}> Mackie</span> oraz technice
          oświetleniowej renomowanej marki{" "}
          <span className={classes.span}> Showtec.</span>
        </p>
        <p className={classes.p2}>
          Podczas obsługi uroczystości
          <span className={classes.span}>
            {" "}
            stawiamy przede wszystkim na
          </span>{" "}
          wysoką kulturę osobistą, elegancję, dbałość o detale, estetykę
          stanowiska oraz wyczucie stylu.
        </p>
        <p className={classes.p2}>
          Jako Best Brothers - DJ & Wodzirej posiadamy legitymację organizacji
          zrzeszającej polskich profesjonalnych DJ-ów. Muzyka odtwarzana przez
          nas podczas imprez pochodzi z polskich oraz zagranicznych firm
          fonograficznych i jest całkowicie legalna. Każdy utwór posiada odrębny
          certyfikat, zezwalający na publiczne odtwarzanie, bez narażania się na
          negatywne skutki kotroli róznych instytucji.
        </p>
      </div>
    </div>
  );
};

export default Eq;
