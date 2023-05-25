import React from 'react';

function SearchBar() {
  return (
    <>
      <div className="Search">
        <div className="searchInputs">
          <input type="text" placeholder="Search.." className="searchInput" />
          <div className="searchIcon">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
      <div className="dataResult"></div>
    </>
  );
}

export default SearchBar;
