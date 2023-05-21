import React from "react";

const Nav = () => {

    return (
        <>
        <div className='login-button'>
                <a href='/Login'><button style={{textDecoration:'none'}}>LogIn</button></a>
        </div>
        <div className='signup-button'>
                <a href='/SignUp'><button style={{textDecoration:'none'}}> SignUp</button></a>
        </div>
        <div className="logo"><img src="./src/assets/logob.svg"/></div>
        
        </>
    );
};
export default Nav;