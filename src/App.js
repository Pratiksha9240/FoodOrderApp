import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import MyCart from "./components/Cart/MyCart";
import { useState } from 'react';
import CartProvider from "./context/CartProvider";

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
    <CartProvider>
      <Header onCart = {onClickHandler}></Header>
      <div>
      {f === true && <MyCart onClose = {onCloseHandler} />}
    </div>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
