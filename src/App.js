import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import ConfirmOrder from './Components/Cart/ConfirmOrder'
import Thankyou from "./Components/Cart/Thankyou.js";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const [confirmOred, setConfirmOrder] = useState(false)
  const [thankyouCard, setThankyouCard] = useState(false)
  const showCartHandler = () => {
    setCartIsShown(true)
  }
  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  const showConfirmOrder = () => {
    setConfirmOrder(true)
  }
  const hideConfirmOrder = () => {
    setConfirmOrder(false)
  }
  const SetThankyouCard = () =>{
    setThankyouCard(!thankyouCard)
  }

  return (
    <CartProvider>
      {thankyouCard && <Thankyou onClick={SetThankyouCard} />}
      {confirmOred && <ConfirmOrder onClick={hideConfirmOrder} onConfirm={SetThankyouCard}/>}
      {cartIsShown && <Cart onClick={hideCartHandler} onConfirm={showConfirmOrder}/>}
      <Header onClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App;
