import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Sale from '../components/sale';
import Nav from '../components/nav';
import Cart from '../components/cart'; // Import the Cart component
import '../style/Products.css';

function ShopLanguages() {
  const [cartItems, setCartItems] = useState([]); // Manage cart state

  const products = [
    { id: 1, name:'JavaScript', price: 9.99, prices:"price1", image: './src/assets/JsCard.svg', classes: "JavaScriptP",Description: "JavaScript is a versatile programming language commonly used for web development. It enables interactivity and dynamic behavior on web pages by allowing developers to manipulate the content and behavior of a website. It can be used for tasks ranging from simple form validation to complex web application development.", Descriptions: "Description1",  productcard: "product-card1" },
    { id: 2, name: 'Java', price: 14.99, prices:"prices2", image: './src/assets/JavaCard.svg', classes: "JavaP", Description: "Java is a widely used object-oriented programming language known for its platform independence. It provides a robust and secure environment for developing applications across various domains, including web, mobile, and enterprise systems. Java's rich ecosystem, including its extensive libraries and frameworks, make it a popular choice for building scalable and high-performance software.", Descriptions: "Description2", productcard: "product-card2"  },
    { id: 3, name: 'Python', price: 19.99, prices: "price3", image: './src/assets/PythonCard.svg', classes: "PythonP", Description: "Python is a versatile and beginner-friendly programming language known for its simplicity and readability. It offers a wide range of libraries and frameworks that make it suitable for various applications, from web development to data analysis and machine learning. With its clean syntax and extensive documentation, Python has become a popular choice among developers for its efficiency and ease of use.", Descriptions: "Description3", productcard: "product-card3" },
    { id: 4, name: 'HTML', price: 19.99, prices: "price4", image: './src/assets/HTMLCard.svg', classes: "HTMLP", Description: " HTML (Hypertext Markup Language) is the standard language used for creating web pages and structuring their content. It uses a series of tags to define the structure, layout, and presentation of a webpage, including headings, paragraphs, images, links, and more. HTML works in conjunction with CSS (Cascading Style Sheets) to style and format the elements on a webpage, creating visually appealing and interactive websites.", Descriptions: "Description4", productcard: "product-card4" }
  ];

  const handleProductClick = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
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
      {products.map(product => (
        <div key={product.id} className={product.productcard} onClick={() => handleProductClick(product.id)}>
          <img  className={product.classes} src={product.image} alt={product.name} />
          <h3 className={product.name}>{product.name}</h3>
          <p className={product.Descriptions}>{product.Description}</p>
          <h4 className={product.prices}>{product.price}</h4>
        </div>
      ))}
      <Cart cartItems={cartItems} removeFromCart={handleRemoveFromCart} /> {/* Render the Cart component */}
    </>
  );
}

export default ShopLanguages;
