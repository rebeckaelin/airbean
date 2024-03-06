import checkout_bag from "./../../assets/bag.svg";
import "./Checkout.scss";
import {useCheckoutStore} from "../../Store/Cart";
import {useState} from "react";
import CartPage from "../../pages/CartPage";

const Checkout = () => {
  const {cartCount} = useCheckoutStore();
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <section
        className="checkout-box"
        onClick={() => setShowDropdown(!showDropdown)}>
        <section className="checkout-box__icon">
          <img className="checkout-box__bag" src={checkout_bag} alt="" />
        </section>
      </section>
      <section className="checkout-box__counter">
        <p className="checkout-box__counter-text">{cartCount}</p>
      </section>
      <div
        className={`overlay ${showDropdown ? "visible" : ""}`}
        onClick={() => console.log("Overlay clicked!")}></div>
      {showDropdown && <CartPage />}
    </>
  );
};

export default Checkout;
