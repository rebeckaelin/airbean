import "./styles/ProfilePage.scss";
import navIcon from "./../assets/navicon.svg";
import headerImg from "./../assets/header_menu.svg";
import line from "./../assets/line2.svg";
import avatar from "./../assets/Profile.svg";
import {useState} from "react";
import NavPage from "../components/Nav/NavPage";
import Modal from "../components/Modal/Modal";

const ProfilePage = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const handleClick = () => {
    setIsOverlayVisible(true);
  };
  return (
    <>
      <section className="profile-page">
        <header
          className="profile-page__header"
          style={{backgroundImage: `url(${headerImg})`}}>
          <img
            className="profile-page__nav-icon"
            src={navIcon}
            alt="navigation-icon"
            onClick={() => handleClick()}
          />
        </header>
        <section className="profile-page__user-info">
          <img src={avatar} alt="avatar-picture" />
          <h1>Rebban Rebzon</h1>
          <p>rebban@rebz.rebz</p>
        </section>
        <article className="profile-page__order-history">
          <h2 className="profile-page__order-info-title">Orderhistorik</h2>
          <section className="profile-page__order-history-item">
            <p>
              <span>#AB1123282323Z</span>
            </p>
            <p className="profile-page__order-date">20/03/06</p>
            <p>total ordersumma</p>
            <p className="profile-page__order-price">443 kr</p>
            <img src={line} alt="line" />
          </section>
          <section className="profile-page__order-history-item">
            <p>
              <span>#AB1128382323X</span>
            </p>
            <p className="profile-page__order-date">20/03/03</p>
            <p>total ordersumma</p>
            <p className="profile-page__order-price">333 kr</p>
            <img src={line} alt="line" />
          </section>
          <section className="profile-page__order-history-item">
            <p>
              <span>#AB1444482323X</span>
            </p>
            <p className="profile-page__order-date">20/02/21</p>
            <p>total ordersumma</p>
            <p className="profile-page__order-price">893 kr</p>
            <hr />
          </section>

          <section className="profile-page__order-info-total-container">
            <p className="profile-page__total-title">Totalt spenderat</p>
            <p className="profile-page__total-price">1669 kr</p>
          </section>
        </article>
        {isOverlayVisible && (
          <NavPage closeNav={() => setIsOverlayVisible(false)} />
        )}
      </section>
      <Modal />
    </>
  );
};

export default ProfilePage;
