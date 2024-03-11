import "./Modal.scss";
import logoSmall from "./../../assets/airbean_logo_small.svg";
import {useState} from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) {
    return null;
  }

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="login-page">
        <header className="login-page__header">
          <img src={logoSmall} alt="airbean_logo" />
          <h1 className="login-page__title">
            Välkommen till <br /> AirBean-familjen!
          </h1>
          <p className="login-page__desc">
            Genom att skapa ett konto nedan <br /> kan du spara och se din
            orderhistorik.
          </p>
        </header>
        <section className="login-page__form">
          <form action="">
            <label htmlFor="name">Namn</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Rebban Rebzon"
            />
            <label htmlFor="email">Epost</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="rebban@rebz.rebz"
            />
          </form>
          <article className="gdpr">
            <div className="gdpr-dot"></div>
            <p>GDPR Ok!</p>
          </article>
        </section>
        <button onClick={() => handleClick()}>Brew me a cup!</button>
      </section>
    </>
  );
};

export default Modal;
