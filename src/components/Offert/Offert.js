import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/logo.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";
import { SiDiscogs } from "react-icons/si";

import Wedding from "./Wedding";
import Eq from "./Eq";
import Party from "./Party";
import Additional from "./Additional";
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
    minHeight: "50vh",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6)),url(${Image})`,
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
    height: "180px",
    padding: "20px",

    width: "250px",
    margin: "5px",
    "&:hover": {
      transform: "scale(1.1)",
    },
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
    color: "white",
  },
  p2: {
    fontSize: "16px",
    letterSpacing: "2px",
    fontWeight: "400",
    color: "white",
    lineHeight: "34px",
  },
  p: {
    fontSize: "22px",
    letterSpacing: "2px",
    fontWeight: "500",
    color: "white",
  },
}));

const Offert = () => {
  const classes = useStyles();
  return (
    <div id="oferta" className={classes.container}>
      <div className={classes.OffertContainer}>
        <h1 className={classes.h1}>Oferta dla was</h1>
        <p className={classes.p2}>
          Zapraszamy do zapoznania się z naszą ofertą. <br /> W przypadku
          jakichkolwiek dodatkowych pytań prosimy o kontakt. Na pewno nie
          zostawimy zadnego pytania bez odpowiedzi!
        </p>

        <div className={classes.wrapper}>
          <a href="#wesela">
            <div className={classes.item}>
              <div className={classes.itemicon}>
                <AiOutlineHeart style={{ color: "white", fontSize: "30px" }} />
              </div>
              <p className={classes.p}>Wesela</p>
            </div>
          </a>
          <a href="#stanowisko">
            <div className={classes.item}>
              <div className={classes.itemicon}>
                <SiDiscogs style={{ color: "white", fontSize: "30px" }} />
              </div>
              <p className={classes.p}>Stanowisko</p>
            </div>
          </a>
          <a href="#imprezy">
            <div className={classes.item}>
              <div className={classes.itemicon}>
                <GiPartyPopper style={{ color: "white", fontSize: "30px" }} />
              </div>
              <p className={classes.p}>Inne imprezy</p>
            </div>
          </a>
          <a href="#usługi">
            <div className={classes.item}>
              <div className={classes.itemicon}>
                <MdOutlineAddCircleOutline
                  style={{ color: "white", fontSize: "30px" }}
                />
              </div>
              <p className={classes.p}>Usługi dodatkowe</p>
            </div>
          </a>
        </div>
      </div>
      <Wedding />
      <Eq />
      <Party />
      <Additional />
    </div>
  );
};

export default Offert;
