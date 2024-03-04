import "./styles/CartPage.scss";

const CartPage = () => {
  return (
    <>
      <article className="cart-page">
        <h1>Din beställning</h1>
        <section className="cart-page__display-items">
          <ul>
            <li>MENYITEMS HÄR</li>
            <li>MENYITEMS HÄR</li>
            <li>MENYITEMS HÄR</li>
            <li>MENYITEMS HÄR</li>
          </ul>
        </section>
        <section className="cart-page__display-total">TOTALEN HÄR</section>
        <button className="cart-page__button">Take my money!</button>
      </article>
    </>
  );
};

export default CartPage;
