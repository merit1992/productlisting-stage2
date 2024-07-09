import CheckOut from "../checkout/CheckOut";
import style from "./Checked.module.css";
import marked from "../../asset/images/task_alt.svg";
import Button from "../../component/button/Button";
function Checked() {
  return (
    <div className={style.wrapper}>
      <div className={style.opacity}>
        <CheckOut />
      </div>
      <div className={style.modal}>
        <div className={style.close}>❌</div>
        <div className={style.modal_flex}>
          <img src={marked} alt="marked" />
          <h3>Payment Confirmed</h3>
          <p>
            Your transaction has been processed and your products will be
            delivered in the next 24 hours.
          </p>
          <Button content="Product page" />
        </div>
      </div>
    </div>
  );
}

export default Checked;
