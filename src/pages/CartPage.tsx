import "./styles/CartPage.scss";
import {useNavigate} from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";
import {useCheckoutStore} from "../Store/Cart";

interface RequestBodyData {
  details: {
    order: {
      name: string;
      price: number;
    }[];
  };
}
const CartPage = () => {
  const {totalSum, cart, setOrderNumber, resetCart} = useCheckoutStore();
  const navigate = useNavigate();

  const handleClick = () => {
    const requestBody = {
      details: {
        order: cart.flatMap((item) =>
          Array.from({length: item.quantity}, () => ({
            name: item.title,
            price: item.price,
          }))
        ),
      },
    };

    async function fetchData(body: RequestBodyData) {
      try {
        const url =
          "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order";
        const response = await fetch(url, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body),
        });
        const data = await response.json();
        setOrderNumber(data.orderNr);
      } catch (error) {
        console.error("error:", error);
      }
    }

    navigate("/status");

    fetchData(requestBody);
    resetCart();
  };
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
        <button
          className="cart-page__button"
          onClick={() => handleClick()}
          disabled={cart.length === 0}>
          Take my money!
        </button>
      </article>
    </>
  );
};

export default CartPage;
