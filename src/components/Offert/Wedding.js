import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/n6.jpg";
import Image2 from "../../assets/n.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";
import { SiDiscogs } from "react-icons/si";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    minHeight: "100vh",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundImage: `linear-gradient(rgba(255, 255, 255,0.9),rgba(255, 255, 255,0.9)),url(${Image2})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    "@media (max-width: 1024px)": {
      flexDirection: "column-reverse",
    },
  },
  imagediv: {
    display: "flex",
    width: "auto",
    padding: "10px",
    margin: "10px",
    "@media (max-width: 770px)": {
      padding: "20px",

      margin: "0",
    },
  },
  img: {
    width: "100%",
    height: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "60%",
    padding: "10px",
    margin: "10px",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

    "@media (max-width: 1024px)": {
      width: "100%",
      padding: "0",
      margin: "0",
    },
  },
  headerText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    textAlign: "start",
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
    fontSize: "16px",
    margin: "5px",
    letterSpacing: "2px",
    lineHeight: "26px",
    fontWeight: "500",
    color: "rgb(46, 46, 46)",
    "@media (max-width: 1100px)": {
      fontSize: "12px",
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
const Wedding = () => {
  const classes = useStyles();
  return (
    <div id="wesela" className={classes.container}>
      <div className={classes.imagediv}>
        <img className={classes.img} src={Image} alt="" />
      </div>
      <div className={classes.header}>
        <div className={classes.headerText}>
          <h1 className={classes.h1}>
            <span className={classes.span}>
              {" "}
              Ka??de wesele jest dla nas niesamowitym prze??yciem!
            </span>
          </h1>
          <p className={classes.p}>
            Do ka??dej uroczysto??ci podchodzimy indywidualnie. Wsp??lnie z Par??
            M??od?? tworzymy scenariusze idealnie dopasowane do charakteru wesela.
            Jeste??my elastyczni i otwarci na wszystkie propozycje.
          </p>
          <p className={classes.p}>
            Podczas wesela bardzo szczeg????owo dobieramy repertuar muzyczny, na
            bie????co obserwuj??c preferencje go??ci. Oddajemy do Pa??stwa dyspozycji
            szerok?? baz?? utwor??w, pocz??wszy od lat 60 przez '70 '80 '90, po
            wsp????czesne hity z list przeboj??w, oczywi??cie wszystkie gatunki
            muzyczne w tym muzyk?? biesiadn??, disco polo, pop, rock, rock'n'roll,
            itd.
          </p>
          <p className={classes.p}>
            Naszym Parom dajemy r??wnie?? mo??liwo???? stworzenia w??asnej playlisty
            weselnej. Jest to lista oko??o 15 - 30 utwor??w, przy kt??rych Pa??stwo
            M??odzi uwielbiaj?? si?? bawi??, lub kt??re maj?? sentymantalne znaczenie
            dla nich oraz ich bliskich.
          </p>
          <p className={classes.p}>
            W trakcie wesela odtwarzamy utwory na ??yczenie go??ci oraz
            realizujemy wszystkie dedykacje.
          </p>
        </div>
      </div>

      <div className={classes.navigations}>
        <a href="#wedding">
          <div className={classes.itemiconactive}>
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
        <a href="#additional">
          <div className={classes.itemicon}>
            <MdOutlineAddCircleOutline
              style={{ color: "black", fontSize: "10px" }}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Wedding;
