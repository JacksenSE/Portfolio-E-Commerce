import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Sale from '../components/sale';
import Nav from '../components/nav';
import Cart from '../components/cart';
import '../style/Products.css';
import Frameworks from '../Seeds/Frameworks';

function ShopFrameworks() {
  const [cartItems, setCartItems] = useState([]);

  const handleFrameworkClick = (frameworkId) => {
    const frameworkToAdd = Frameworks.find((framework) => framework.id === frameworkId);
    setCartItems((prevCartItems) => [...prevCartItems, frameworkToAdd]);
  };

  const handleRemoveFromCart = (frameworkId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== frameworkId)
    );
  };

  return (
    <>
      <SearchBar />
      <Sale />
      <Nav />
      <a href="/">
        <button>Back</button>
      </a>
      {Frameworks.map((framework) => (
        <div key={framework.id} className={framework.frameworkcard} onClick={() => handleFrameworkClick(framework.id)}>
          <img className={framework.classes} src={framework.image} alt={framework.name} />
          <h3 className={framework.name}>{framework.name}</h3>
          <p className={framework.Descriptions}>{framework.Description}</p>
          <h4 className={framework.prices}>{framework.price}</h4>
        </div>
      ))}
      <Cart cartItems={cartItems} removeFromCart={handleRemoveFromCart} />
    </>
  );
}

export default ShopFrameworks;
