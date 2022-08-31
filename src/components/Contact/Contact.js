import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "./Styles.scss";

const Contact = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_vp66n7q", "template_awe19s9", values, "smQiWYotfaIg-1_RE")
      .then(
        (response) => {
          console.log("Wiadomość wysłana!", response);
          setValues({
            fullName: "",
            email: "",
            message: "",
          });
          setStatus(true);
          setLoading(true);
        },
        (error) => {
          console.log("Podaj dane i zaakceptuj regulamin.", error);
        }
      );
  };

  return (
    <>
      <h2 className="head-text">Napisz do nas!</h2>

      {!status ? (
        <form
          id="kontakt"
          onSubmit={handleSubmit}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Imię i nazwisko"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Adres e-mail"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Napisz wiadomość"
              value={values.message}
              name="message"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="p-text">
            Wyślij
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Jest nam niezmiernie miło! Odpowiemy najszybciej jak to możliwe!
          </h3>
        </div>
      )}
      <div className="app__footer-cards"></div>
    </>
  );
};

export default Contact;
