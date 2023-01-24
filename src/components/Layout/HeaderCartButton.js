import { useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import MyCart from '../Cart/MyCart';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

  let flag = false;

  const [f,setFlag] = useState(flag);

  const onClickHandler = () => {
    setFlag(true);
  }

  return (
    <>
    <button onClick={onClickHandler} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
    <div>
      {f === true && <MyCart/>}
    </div>
    </>
  );
};

export default HeaderCartButton;
