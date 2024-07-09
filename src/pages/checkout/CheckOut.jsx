import style from "./Checkout.module.css";
import Button from "../../component/button/Button";
import paypal from "../../asset/images/paypal.svg";
import card from "../../asset/images/card.svg";
import transfer from "../../asset/images/transfer.svg";
import arrowDown from "../../asset/images/arrowdown.svg";
import { Link } from "react-router-dom";

function CheckOut() {
  return (
    <div className={style.wrapper}>
      <h2>Select Payment Method</h2>
      <div className={style.payment_method}>
        <div className={style.transfer}>
          <img src={transfer} alt="transfer" />
          <p>Bank Transfer</p>
        </div>
        <div className={style.card}>
          <img src={card} alt="card" />
        </div>
        <div className={style.paypal}>
          <img src={paypal} alt="transfer" />
          <p>paypal</p>
        </div>
      </div>
      <form>
        <label htmlFor="name">
          {" "}
          name on card
          <input className={style.input} type="text" id="name" />
        </label>
        <label htmlFor="card">
          card number
          <input
            className={style.input}
            type="number"
            id="card"
            placeholder="0000-  0000- 0000- 0000"
          />
        </label>
        <div className={style.select}>
          <div className={style.period_div}>
            <h3>month</h3>
            <div className={style.month}>
              <p>Bank Transfer</p>
              <img src={arrowDown} alt="transfer" />
            </div>
          </div>
          <div className={style.period_div}>
            <h3>year</h3>
            <div className={style.month}>
              <p>Bank Transfer</p>
              <img src={arrowDown} alt="transfer" />
            </div>
          </div>
          <div className={style.period_div}>
            <h3>cvv</h3>
            <div className={style.empty}></div>
          </div>
        </div>
      </form>
      <div className={style.btn}>
        <Link to="/checked">
          <Button content="Proceed" />
        </Link>
      </div>
    </div>
  );
}

export default CheckOut;
