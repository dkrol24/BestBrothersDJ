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
    fontSize: "35px",
    letterSpacing: "2px",
    fontWeight: "400",
    color: "yellow",
  },
  p2: {
    fontSize: "18px",
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
    <div id="eq" className={classes.container}>
      <div className={classes.OffertContainer}>
        <h1 className={classes.h1}>Sprzęt DJ!</h1>
        <p className={classes.p2}>
          Nasz sprzęt Dj’ski, który świetnie sprawdza się w każdych warunkach to{" "}
          <span className={classes.span}>
            profesjonalny stół mikserski firmy DOBREJ.
          </span>
        </p>
        <p className={classes.p2}>
          <span className={classes.span}>Oświetlenie </span>- dopasowane do
          wielkości sali. Estetyczne i eleganckie głowice ruchome firmy
          spełniają wymagania najbardziej wymagających klientów. Dodatkowe
          oświetlenie sali <span className={classes.span}> światłem LED</span>{" "}
          sprawia, że tworzy się niepowtarzalny klimat...
        </p>
        <p className={classes.p2}>
          <span className={classes.span}>Nagłośnienie </span>- profesjonale
          aktywne kolumny firmy JBL to czysty i głęboki dźwięk. Zarówno wewnątrz
          jak również w plenerze.
        </p>
        <p className={classes.p2}>
          Bardzo dbamy o minimalizację okablowania jeżeli chodzi o{" "}
          <span className={classes.span}>estetykę.</span>
        </p>
      </div>
    </div>
  );
};

export default Eq;
