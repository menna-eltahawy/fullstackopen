function CartItem({ item, updateQuantity }) {

  return (
    <div className="cart-item">
      <h3>{item.title}</h3>

      <div>
        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
      </div>
    </div>
  );
}

export default CartItem;