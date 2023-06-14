import React from 'react'
import { Link } from 'react-router-dom';
export default function Account() {
  return (
    <>
    <div className='login-button'>
<Link to='/Login'><button style={{textDecoration:'none'}}>LogIn</button></Link>
</div>
<div className='signup-button'>
<Link to='/SignUp'><button style={{textDecoration:'none'}}> SignUp</button></Link>
</div>
<Link to='/'> <button>Back</button></Link>
        </>
  )
}
