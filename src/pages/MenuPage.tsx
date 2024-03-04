import "./styles/MenuPage.scss";
import navicon from "./../assets/navicon.svg";
import header_img from "./../assets/header_menu.svg";
import footer_img from "./../assets/footer_menu.svg";
import Menu from "./../components/Menu/Menu";
import Checkout from "../components/Checkout/Checkout";

import {useNavigate} from "react-router-dom";

const MenuPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/nav", {state: {from: "menu"}});
  };
  return (
    <article className="menu-page">
      <header
        className="menu-page__header"
        style={{backgroundImage: `url(${header_img})`}}>
        <section className="menu-page__icons-container">
          <img
            className="menu-page__nav-icon"
            src={navicon}
            alt=""
            onClick={() => handleClick()}
          />
          <Checkout />
        </section>
      </header>
      <article className="menu-container">
        <h1 className="menu-container__title">Meny</h1>
        <article className="menu">
          <ul>
            <Menu />
          </ul>
        </article>
      </article>
      <footer
        className="menu-page__footer"
        style={{backgroundImage: `url(${footer_img})`}}></footer>
    </article>
  );
};

export default MenuPage;
