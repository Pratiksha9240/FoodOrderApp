import { React, useContext, useState } from "react";
import CartContext from "../../context/cart-context";
import classes from "./UserInput.module.css";

const UserInput = (props) => {

  const [amt,setAmt] = useState(0);

  const amountChangeHandler = (event) => {
    setAmt(event.target.value);
    setIsError(false)
    // console.log(amt)
  }

  const [isError,setIsError] = useState(false);


  const ctx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amt;

    if(enteredAmount <= 0){
      setIsError(true);
    }
    else{
      ctx.addItem({
        id: props.id,
        name: props.name,
        amount: enteredAmount,
        price: props.price});
    }

    setAmt(0);

  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.input}>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" name="quantity" id="quantity" onChange={amountChangeHandler} value={amt}/>
        </div>
        {isError && <p className={classes.p}>Please Enter a valid amount</p>}
        <button type="submit">+ Add</button>
      </form>
    </>
  );
};

export default UserInput;
