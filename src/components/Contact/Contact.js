import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "./Styles.scss";

const Contact = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
    warning: "",
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
      .send("service_whv9la4", "template_89j7p6t", values, "l2XYLd6SKrB6rrvoZ")
      .then(
        (response) => {
          console.log("Wiadomość wysłana!", response);
          setValues({
            fullName: "",
            email: "",
            message: "",
            warning: "",
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
              required
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
              required
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
              required
              className="p-text"
              placeholder="Napisz wiadomość"
              value={values.message}
              name="message"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              name="warning"
              type="checkbox"
              required
              value={values.warning}
              style={{ width: "15px", height: "15px", marginRight: "0.4rem" }}
              onClick={() => setCheckboxChecked(!checkboxChecked)}
            />
            <p
              className="p-text"
              style={{ fontSize: "10px" }}
              handleChange={handleChange}
            >
              Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o
              ochronie danych osobowych w związku z wysłaniem zapytania przez
              formularz kontaktowy. Podanie danych jest dobrowolne, ale
              niezbędne do przetworzenia zapytania. Zostałem poinformowany, że
              przysługuje mi prawo dostępu do swoich danych, możliwości ich
              poprawiania, żądania zaprzestania ich przetwarzania.
              Administratorem danych osobowych jest Event4Active, ul. Obwodowa
              6C, 05-660 Warka.
            </p>
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
    </>
  );
};

export default Contact;
