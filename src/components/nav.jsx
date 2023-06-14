import React from 'react';
import { Link } from 'react-router-dom';



const Nav = () => {
  

  return (
   <>
        <div className="login-button">
        <Link to="/Account">
            <button style={{ textDecoration: 'none' }}>Account</button>
            </Link>
        </div>
    
      <div className="logo">
        <img src="/logob.svg" alt="Logo" />
      </div>
    </>
  );
};

export default Nav;
