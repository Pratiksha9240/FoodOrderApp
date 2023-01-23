import React from "react";
import classes from "./UserInput.module.css";

const UserInput = (props) => {
  return (
    <React.Fragment>
      <form className={classes.form}>
        <div className={classes.input}>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" name="quantity" id="quantity" />
        </div>
        <button type="submit">+ Add</button>
      </form>
    </React.Fragment>
  );
};

export default UserInput;
