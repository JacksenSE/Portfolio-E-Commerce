import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className='Cart'>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className='Cart-items'>
          {cartItems.map((item) => (
            <li key={item.id} className='Cart-item'>
              <img src={item.image} alt={item.name} /><br/>
              <span>{item.name}</span>
              <span>{item.price}</span><br/>
              
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
