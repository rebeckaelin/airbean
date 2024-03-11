import "./NavPage.scss";
import closeIcon from "./../../assets/close.svg";
import line from "./../../assets/line.png";
import {useNavigate} from "react-router-dom";
import {createPortal} from "react-dom";

interface NavPageProps {
  closeNav: () => void;
}

function NavPage({closeNav}: NavPageProps) {
  const navigate = useNavigate();
  let overlayRoot = document.getElementById("overlay-root");
  const handleClick = (choice: string) => {
    navigate(`/${choice}`);
  };

  const handleCloseClick = () => {
    closeNav();
  };

  return createPortal(
    <article className="nav-page">
      <img
        className="nav-page__close-icon"
        src={closeIcon}
        alt=""
        onClick={() => {
          handleCloseClick();
        }}
      />
      <section className="nav-page__menu">
        <p className="menu__item" onClick={() => handleClick("menu")}>
          Meny
        </p>
        <img className="menu__line" src={line} alt="" />
        <p className="menu__item" onClick={() => handleClick("about")}>
          Vårt kaffe
        </p>
        <img className="menu__line" src={line} alt="" />
        <p className="menu__item" onClick={() => handleClick("profile")}>
          Min profil
        </p>
        <img className="menu__line" src={line} alt="" />
        <p className="menu__item" onClick={() => handleClick("status")}>
          Orderstatus
        </p>
      </section>
    </article>,
    overlayRoot as Element
  );
}

export default NavPage;
