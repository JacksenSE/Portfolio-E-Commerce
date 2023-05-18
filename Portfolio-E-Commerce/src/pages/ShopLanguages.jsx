import React from 'react';
import SearchBar from '../components/SearchBar';
import Sale from '../components/sale';
import Nav from '../components/nav';
import '../style/Products.css'
function ShopLanguages() {
  
  const products = [
    { id: 1, name:'JavaScript', price: 9.99, image: './src/assets/JsCard.svg', classes: "JS", prices:"price1", productcard: "product-card1" },
    { id: 2, name: 'Product 2', price: 14.99, image: 'product2.jpg', classes: "Python", prices:"prices2", productcard: "product-card2"  },
    { id: 3, name: 'Product 3', price: 19.99, image: 'product3.jpg', classes: "Java", prices: "price3", productcard: "product-card3"}
  ];
  
  const handleProductClick = (productId) => {

    console.log('Product clicked:', productId);
  
  };
  return (
    <>
    <SearchBar/>
      <Sale/>
      <Nav/>
      {products.map(product => (
        <div key={product.id} className={product.productcard} onClick={() => handleProductClick(product.id)}>
          <img  className={product.classes} src={product.image} alt={product.name} />
          <h3 className={product.name}>{product.name}</h3>
          <p className={product.prices}>{product.price}</p>
        </div>
      ))}
    </>
  );
}

export default ShopLanguages;

