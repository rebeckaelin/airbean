import airbean_logo from "./../assets/logo.svg";
import header_left from "./../assets/header_left.svg";
import header_right from "./../assets/header_right.svg";
import "./styles/LandingPage.scss";

import {useState} from "react";
import NavPage from "../components/Nav/NavPage";

const LandingPage = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const handleClick = () => {
    setIsOverlayVisible(true);
  };

  return (
    <>
      <section className="landing-page" onClick={() => handleClick()}>
        <img className="landing-page__img--left" src={header_left} alt="" />
        <img className="landing-page__logo" src={airbean_logo} alt="" />
        <img className="landing-page__img--right" src={header_right} alt="" />
      </section>
      {isOverlayVisible && (
        <NavPage closeNav={() => setIsOverlayVisible(false)} />
      )}
    </>
  );
};

export default LandingPage;
