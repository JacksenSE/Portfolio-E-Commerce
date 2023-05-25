import React from 'react';

const Nav = () => {
  const isLoggedIn = false;

  return (
    <>
      {isLoggedIn && (
        <div className="login-button">
          <a href="/Account">
            <button style={{ textDecoration: 'none' }}>Account</button>
          </a>
        </div>
      )}
      <div className="logo">
        <img src="./src/assets/logob.svg" alt="Logo" />
      </div>
    </>
  );
};

export default Nav;
