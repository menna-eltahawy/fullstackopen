import { useOutletContext } from "react-router";
import { useState } from "react";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, updateQuantity } = useOutletContext();
  const [isOrdered, setIsOrdered] = useState(false); 
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });


  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free Shipping
  const total = subtotal + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOrdered(true);
  };

  if (isOrdered) {
    return (
      <div className="center success-message">
        <h2>Thank you, {formData.name}</h2>
        <p>Your order has been placed successfully.</p>
        <p>Expect your delivery within <strong>3 business days</strong>.</p>
      </div>
    );
  }

  if (cart.length === 0) {
    return <h2 className="center">Your cart is empty</h2>;
  }

  return (
    <div className="cart-page">
      <div className="cart-items-list">
        {cart.map(item => (
          <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
        ))}
      </div>

      <div className="checkout-section">
        <h3>Order Summary</h3>
        <div className="summary-details">
          <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
          <p>Shipping: <span className="free">FREE</span></p>
          <hr />
          <h4>Total: <span>${total.toFixed(2)}</span></h4>
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Contact Information</h3>
          <input 
            type="text" placeholder="Full Name" required 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
          />
          <input 
            type="tel" placeholder="Phone Number" required 
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <input 
            type="email" placeholder="Email Address" required 
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <button type="submit" className="checkout-btn">Complete Checkout</button>
        </form>
      </div>
    </div>
  );
}

export default Cart;