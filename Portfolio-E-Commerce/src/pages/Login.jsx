import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    // Check if the user is already logged in by looking for the JWT token in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);


  async function handleSubmit(e) {
    e.preventDefault();
    navigate('/');
  
    const response = await fetch('http://localhost:4005/auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  
    const data = await response.json();
  
    if (response.status === 200) {
      // Set login status to true and store the JWT token in local storage
      setLoggedIn(true);
      localStorage.setItem('token', data.token);
    } else {
      // Handle login error
      console.log(data.message);
    }
  }
  
  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('token'); // Remove the JWT token from local storage
  };

  return (
    <>
      {loggedIn ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <form className="main__login" onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-text-title">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                required
                value={user.email}
                onChange={e => setUser({ ...user, email: e.target.value })}
                className="form-text-box"
                id="email"
                name="email"
              />
            </div>
            <div className="form-text-title">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })}
                className="form-text-box"
                id="password"
                name="password"
              />
            </div>
          </div>
          <input className="btn btn-primary" type="submit" value="Login" />
        </form>
        
      )}
      
    </>
  );
}

export default LogIn;
