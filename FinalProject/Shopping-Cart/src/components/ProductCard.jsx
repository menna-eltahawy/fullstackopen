import { useState } from "react";

function ProductCard({ product, addToCart }) {

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="card">
      <img src={product.image} />
      <h3>{product.title}</h3>

      <div className="controls">
        <button onClick={() => setQuantity(quantity - 1)}>-</button>

        <input
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <button onClick={() => addToCart(product, quantity)}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;