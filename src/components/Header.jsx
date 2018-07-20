import React from 'react';

const Header = function(props) {
  return(
    <header className="component--header">
      <div className="header-text">Logo</div>
      <input type="text" placeholder="Search" onChange={props.inputChangeHandler}/>
    </header>
  );
}

export default Header;