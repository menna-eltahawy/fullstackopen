import { Link } from "react-router";

function Navbar({ cart }) {

  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <h2>Menna Store</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({total})</Link>
      </div>
    </nav>
  );
}

export default Navbar;