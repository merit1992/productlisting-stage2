import style from "./Cart.module.css";
import cartTassle from "../../asset/images/cartTassle.svg";
import cartPointer from "../../asset/images/cartFlat.svg";
import cartUnisex from "../../asset/images/cartUnisex.svg";
import cartNike from "../../asset/images/cartNike.svg";
import bin from "../../asset/images/bin.svg";
import Button from "../../component/button/Button";
import { Link } from "react-router-dom";

const cartArray = [
  {
    image: cartPointer,
    description: "Women flat",
    bin: bin,
    price: 60.45,
    quantity: 2,
  },
  {
    image: cartUnisex,
    description: "Unisex Lace up Sneakers",
    bin: bin,
    price: 70.45,
    quantity: 1,
  },
  {
    image: cartNike,
    description: "Nike Air Max 9",
    bin: bin,
    price: 140.45,
    quantity: 1,
  },
  {
    image: cartTassle,
    description: "Brown Tassels Croc Mens Loafers",
    bin: bin,
    price: 190.75,
    quantity: 1,
  },
];

function Cart() {
  return (
    <div className={style.wrapper}>
      <h2>Cart</h2>
      <div className={style.cart_product_quantity}>
        {cartArray.map((cart) => {
          return <CartRender cart={cart} key={cart.description} />;
        })}
      </div>
      <div className={style.sub_total}>
        <div className={style.total}>
          <p>subtotal</p>
          <span>&#36;589.9</span>
        </div>
        <Link to="/checkout">
          <Button content="Check Out" />
        </Link>
      </div>
    </div>
  );

  function CartRender({ cart }) {
    return (
      <div className={style.flex_content}>
        <div className={style.cart_product}>
          <div className={style.cart_prod_display}>
            <img src={cart.image} alt={cart.description} />
            <p>{cart.description}</p>
          </div>
          <div className={style.remove}>
            <img src={cart.bin} alt="remove" />
            <p>remove</p>
          </div>
        </div>
        <div className={style.cart_price}>
          <p>&#36;{cart.price}</p>
          <div className={style.quantity_display}>
            <button>-</button>
            <p>{cart.quantity}</p>
            <button>-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
