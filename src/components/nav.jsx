import React from 'react';

const Nav = () => {
  

  return (
   <>
        <div className="login-button">
          <a href="/Account">
            <button style={{ textDecoration: 'none' }}>Account</button>
          </a>
        </div>
    
      <div className="logo">
        <img src="/logob.svg" alt="Logo" />
      </div>
    </>
  );
};

export default Nav;
