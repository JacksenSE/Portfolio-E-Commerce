import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Sale from '../components/sale';
import Nav from '../components/nav';
import Cart from '../components/cart'; 
import '../style/Products.css';
import products from '../Seeds/products';

function ShopLanguages() {
  const [cartItems, setCartItems] = useState([]);

  const handleProductClick = (productId) => {
    const productToAdd = products.find((product
) => product.id === productId);
    setCartItems((prevCartItems) => [...prevCartItems, productToAdd]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
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
      {products.map((product) => (
        <div key={product.id} className={product.productcard} onClick={() => handleProductClick(product.id)}>
          <img className={product.classes} src={product.image} alt={product.name} />
          <h3 className={product.name}>{product.name}</h3>
          <p className={product.Descriptions}>{product.Description}</p>
          <h4 className={product.prices}>{product.price}</h4>
        </div>
      ))}
      <Cart cartItems={cartItems} removeFromCart={handleRemoveFromCart} />
    </>
  );
}

export default ShopLanguages;
