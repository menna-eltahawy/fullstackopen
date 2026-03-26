import { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const exist = cart.find(item => item.id === product.id);

    if (exist) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const updateQuantity = (id, amount) => {
    setCart(cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + amount }
          : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  return (
    <div>
      <Navbar cart={cart} />
      <Outlet context={{ cart, addToCart, updateQuantity }} />
    </div>
  );
}

export default App;