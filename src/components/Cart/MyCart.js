import classes from "./MyCart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../context/cart-context";

const MyCart = (props) => {
  const cartCtx = useContext(CartContext);

  const items = (
    <ul className={classes.meals}>
      {cartCtx.items.map((i) => (
        <>
          <h2>{i.name}</h2>
          <p className={classes.p}>${i.price}</p>
          <span>
          <button className={classes.add}>+</button>
          <button className={classes.remove}>-</button>
          </span>
          <hr />
        </>
      ))}
    </ul>
  );

  return (
    <Modal>
      {items}
      <div>
        <span>Total price</span>
        <span>12</span>
      </div>
      <div>
        <button className={classes.close} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.order}>Order</button>
      </div>
    </Modal>
  );
};

export default MyCart;
