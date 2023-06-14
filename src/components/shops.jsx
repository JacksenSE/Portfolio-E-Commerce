import React from 'react'
import { Link } from 'react-router-dom';
function Shops() {
  return (
    <>
    <div className='ShopLanguage'>
    <Link to='/ShopLanguages'><button style={{textDecoration:'none'}}> Shop Languages</button></Link>
        </div>
        <div className='ShopFrameworks'>
        <Link to='/ShopFrameworks'><button style={{textDecoration:'none'}}> Shop Languages</button></Link>
        </div>
    </>  
)}
export default Shops