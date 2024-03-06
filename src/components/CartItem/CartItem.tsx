import {useCheckoutStore} from "./../../Store/Cart";
import "./CartItem.scss";
import increase from "./../../assets/up_arrow.svg";
import decrease from "./../../assets/down_arrow.svg";

const CartItem = () => {
  const {cart, increaseQuantity, decreaseQuantity} = useCheckoutStore();
  const displayCartItems = () => {
    return cart.map((item) => (
      <li key={item.id}>
        <section className="cart-item">
          <article className="cart-item__text-container">
            <h2 className="cart-item__title">
              {item.title}
              <span>....................................</span>
            </h2>

            <p className="cart-item__price">{item.itemSum} kr</p>
          </article>
          <section className="cart-item__quantity-container">
            <img
              src={increase}
              alt=""
              onClick={() => increaseQuantity(item.id)}
            />
            <p className="cart-item__quantity"> {item.quantity} </p>
            <img
              src={decrease}
              alt=""
              onClick={() => decreaseQuantity(item.id)}
            />
          </section>
        </section>
      </li>
    ));
  };

  return <>{displayCartItems()}</>;
};

export default CartItem;
