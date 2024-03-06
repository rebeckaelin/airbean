import "./styles/CartPage.scss";

import CartItem from "../components/CartItem/CartItem";
import {useCheckoutStore} from "../Store/Cart";

const CartPage = () => {
  const {totalSum} = useCheckoutStore();
  return (
    <>
      <article className="cart-page">
        <h1>Din beställning</h1>
        <section className="cart-page__display-items">
          <ul>
            <CartItem />
          </ul>
        </section>
        <section className="cart-page__display-total">
          <article className="display-total__text-container">
            <h2 className="cart-page__total-title">
              Total <span>..................................</span>
            </h2>
            <p className="cart-page__total-text">inkl moms + drönarleverans</p>
          </article>
          <p className="cart-page__price">{totalSum} kr</p>
        </section>
        <button className="cart-page__button">Take my money!</button>
      </article>
    </>
  );
};

export default CartPage;
