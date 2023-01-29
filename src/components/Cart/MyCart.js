import classes from "./MyCart.module.css";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../../context/cart-context";
import Order from "./Order";

const MyCart = (props) => {

  const [isVisible,setIsVisible] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const removeFromCartHandler = (id) => {
        cartCtx.removeItem(id);
  }

  const addToCartHandler = (i) => {
    cartCtx.addItem({...i, amount: 1})
  }

  const showOrderScreen = () => {
    setIsVisible(true);
  }

  const items = (
    <ul className={classes.meals}>
      {cartCtx.items.map((i) => (
        <>
          <h2>{i.name}</h2>
          <p className={classes.p}>${i.price}</p>
          <p>{i.amount}</p>
          <span>
            <button className={classes.add} onClick={() => addToCartHandler(i)}>+</button>
            <button className={classes.remove} onClick={() => removeFromCartHandler(i.id)}>-</button>
          </span>
          <hr />
        </>
      ))}
    </ul>
  );

  return (
    <Modal>
      {items}
      <div className={classes.div}>
        <span>Total price</span>
        <span>: {totalAmount}</span>
      </div>
      <div>
        <button className={classes.order} onClick={showOrderScreen}>Order</button>
        <button className={classes.close} onClick={props.onClose}>
          Close
        </button>
      </div>
      <div>
        {isVisible && <Order/>}
      </div>
    </Modal>
  );
};

export default MyCart;
