import airbean_logo from "./../assets/logo.svg";
import header_left from "./../assets/header_left.svg";
import header_right from "./../assets/header_right.svg";
import "./styles/LandingPage.scss";
import {useNavigate} from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };
  return (
    <>
      <section className="landing-page" onClick={() => handleClick()}>
        <img className="landing-page__img--left" src={header_left} alt="" />
        <img className="landing-page__logo" src={airbean_logo} alt="" />
        <img className="landing-page__img--right" src={header_right} alt="" />
      </section>
    </>
  );
};

export default LandingPage;
