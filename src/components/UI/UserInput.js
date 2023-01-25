import { React, useContext } from "react";
import CartContext from "../../context/cart-context";
import classes from "./UserInput.module.css";

const UserInput = (props) => {
  const ctx = useContext(CartContext);
  const submitHandler = (event) => {
    event.preventDefault();
    ctx.addItem(1);
  };

  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.input}>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" name="quantity" id="quantity"/>
        </div>
        <button type="submit">+ Add</button>
      </form>
    </React.Fragment>
  );
};

export default UserInput;
