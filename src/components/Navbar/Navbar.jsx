import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Logo from "../../assets/navbarlogo.png";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import "./Styles.scss";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <nav className={`app__navbar ${show && "navbar__later"}`}>
      <div className="app__navbar-logo">
        <div className="app__navbar-logoimg">
          <img className="logoimg" src={Logo} alt="" />
        </div>

        <ul className="app__navbar-links">
          {["start", "o nas", "oferta", "galeria", "opinie", "kontakt"].map(
            (item) => (
              <li key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
              </li>
            )
          )}
          <a
            href="https://www.facebook.com/dj.bestbrothers/?ref=page_internal"
            target="_blank"
          >
            <AiFillFacebook
              style={{ color: "#3b5998", fontSize: "32px", cursor: "pointer" }}
            />
          </a>
        </ul>
        <div className="app__navbar-menu">
          <HiMenu onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              style={{ background: "rgba(186, 121, 57, 1)" }}
              animate={{
                x: [300, 0],
                position: "fixed",
              }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul className="app__navbar-links">
                {[
                  "start",
                  "o nas",
                  "oferta",
                  "galeria",
                  "opinie",
                  "kontakt",
                ].map((item) => (
                  <li className="app__flex p-text" key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
                <a
                  href="https://www.facebook.com/dj.bestbrothers/?ref=page_internal"
                  target="_blank"
                >
                  <AiFillFacebook
                    style={{
                      color: "#3b5998",
                      fontSize: "32px",
                      cursor: "pointer",
                    }}
                  />
                </a>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
