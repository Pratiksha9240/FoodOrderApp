import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import MyCart from "./components/Cart/MyCart";
import { useState } from 'react';

function App() {

  let flag = false;

  const [f,setFlag] = useState(flag);

  const onClickHandler = () => {
    setFlag(true);
  }

  const onCloseHandler = () => {
    setFlag(false);
  } 

  return (
    <React.Fragment>
      <Header onCart = {onClickHandler}></Header>
      <div>
      {f === true && <MyCart onClose = {onCloseHandler} />}
    </div>
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
