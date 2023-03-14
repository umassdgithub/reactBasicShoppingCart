import Panel from "./components/Panel";
import "./App.css";
import Cart from "./components/Cart";
import { useState } from "react";
import Checkout from "./components/Checkout";

function App() {
  const [cartState, setCart] = useState({
    items: [],
    number: 0,
    totalPrice: 0
  });

  const data = [
    {
      img: "./products/Product_01.jpg",
      title: "Product 1",
      info: "This is a product!",
      price: 29.99
    },
    {
      img: "./products/Product_02.jpg",
      title: "Product 2",
      info: "This is a product!",
      price: 222.95
    },
    {
      img: "./products/Product_03.jpg",
      title: "Product 3",
      info: "This is a product!",
      price: 88.12
    },
    {
      img: "./products/Product_04.jpg",
      title: "Product 4",
      info: "This is a product!",
      price: 22.23
    }
  ];

  return (
    <div>
      <Cart propCart={cartState}></Cart>

      <div className="main">
        {data.map((d, i) => (
          <Panel data={d} key={i} propCart={{ cartState, setCart }} />
        ))}
      </div>

      <div>
        <Checkout cart={cartState} />
      </div>
    </div>
  );
}
export default App;
