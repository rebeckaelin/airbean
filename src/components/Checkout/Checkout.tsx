import checkout_bag from "./../../assets/bag.svg";
import "./Checkout.scss";
import {useCheckout} from "../../Store/Cart";
import {useState} from "react";
import CartPage from "../../pages/CartPage";

const Checkout = () => {
  const {cartCount} = useCheckout();
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
      {showDropdown && <CartPage />}
    </>
  );
};

export default Checkout;
