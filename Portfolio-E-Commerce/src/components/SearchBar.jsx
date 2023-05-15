import React from 'react'


function SearchBar() {
  return (
    <>
    <div className='Search'>
        <div className='searchInputs'></div>
        <input type='text' placeholder="Search.."/>
        <div className='searchIcon'></div>
    </div>
    <div className='dataResult'></div>
    </>
  )
}

export default SearchBar