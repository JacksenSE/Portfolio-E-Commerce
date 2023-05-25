import React from 'react';
import products from '../Seeds/products';

function Popular() {
  const handleProductClick = (productId) => {
    // Handle the click event
  };

  return (
    <>
      <p className="Popular">Popular Products</p>
      {products.map((product) => (
        <div key={product.id} className={product.productcard} onClick={() => handleProductClick(product.id)}>
          <img className={product.classes} src={product.image} alt={product.name} />
          <h3 className={product.name}>{product.name}</h3>
          <p className={product.Descriptions}>{product.Description}</p>
          <h4 className={product.prices}>{product.price}</h4>
        </div>
      ))}
    </>
  );
}

export default Popular;
