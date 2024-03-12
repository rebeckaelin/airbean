import "./styles/AboutPage.scss";
import header_img from "./../assets/header_menu.svg";
import nav_icon from "./../assets/navicon.svg";
import owner_img from "./../assets/Owner.svg";
import footer_img from "./../assets/footer_menu.svg";
import {useState} from "react";
import NavPage from "../components/Nav/NavPage";

const AboutPage = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const handleClick = () => {
    setIsOverlayVisible(true);
  };
  return (
    <>
      <article className="about-page">
        <header
          style={{backgroundImage: `url(${header_img})`}}
          className="about-page__header">
          <img
            className="header__nav-icon"
            src={nav_icon}
            alt="navigation-icon"
            onClick={() => handleClick()}
          />
        </header>
        <main className="about-page__main">
          <h1 className="main__title">Vårt kaffe</h1>
          <section className="main__text-container">
            <p className="bold">
              Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
              grounds dripper, crema, strong whipped, variety extra iced id
              lungo half and half mazagran. Pumpkin spice.
            </p>
            <p className="regular">
              Que dark fair trade, spoon decaffeinated, barista wings whipped,
              as rich aftertaste, con panna milk black, arabica white rich beans
              single shot extra affogato. So affogato macchiato sit extraction
              instant grinder seasonal organic, turkish single shot, single
              origin, and robusta strong to go so dripper. Viennese froth,
              grounds caramelization skinny aromatic cup kopi-luwak, fair trade
              flavour, frappuccino medium, café au lait flavour cultivar ut bar
              instant kopi-luwak.
            </p>
            <p className="regular">
              Roast id macchiato, single shot siphon mazagran milk fair trade
              est aroma a half and half and, so, galão iced to go, whipped as
              cream cup pumpkin spice iced. At extra, rich grinder, brewed to
              go, steamed half and half at, that, percolator macchiato trifecta
              and body as arabica dripper. In galão black java milk sit
              trifecta, robusta, acerbic café au lait instant shop latte.
              Seasonal bar shop filter aroma id, crema, affogato viennese
              cultivar aftertaste, seasonal, percolator cream black, galão
              flavour, milk aromatic turkish skinny crema.
            </p>
          </section>
          <img className="main__image" src={owner_img} alt="image" />
        </main>
        <footer
          className="about-page__footer"
          style={{backgroundImage: `url(${footer_img})`}}></footer>
        {isOverlayVisible && (
          <NavPage closeNav={() => setIsOverlayVisible(false)} />
        )}
      </article>
    </>
  );
};

export default AboutPage;
