import "./styles/NavPage.scss";
import closeIcon from "./../assets/close.svg";
import line from "./../assets/line.png";
import {useLocation, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";

function NavPage() {
  const [previousPage, setPreviousPage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.from) {
      setPreviousPage(location.state.from);
    }
  }, [location]);

  const handleClick = (choice: string) => {
    navigate(`/${choice}`);
  };

  return (
    <article className="nav-page">
      <img
        className="nav-page__close-icon"
        src={closeIcon}
        alt=""
        onClick={() => handleClick(previousPage)}
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
        <p className="menu__item">Min profil</p>
        <img className="menu__line" src={line} alt="" />
        <p className="menu__item" onClick={() => handleClick("status")}>
          Orderstatus
        </p>
      </section>
    </article>
  );
}

export default NavPage;
