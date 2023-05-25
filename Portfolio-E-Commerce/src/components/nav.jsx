import React from 'react';

const Nav = () => {
  const isLoggedIn = false; // Replace this with your authentication logic to determine if the user is logged in

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
