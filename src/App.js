import React from "react";

import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import PlaceToVisit from "./components/PlaceToVisit";
import Testimonial from "./components/Testimonial/Testimonial";
import WSPGallery from "./components/Gallery/WSPGallery";
import Offert from "./components/Offert/Offert";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
export default function App() {
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CssBaseline />
        <Header />
        <PlaceToVisit />

        <Offert />
        <WSPGallery />
        <Testimonial />
        <Contact />
        <Info />
        <Footer />
      </div>
    </>
  );
}
