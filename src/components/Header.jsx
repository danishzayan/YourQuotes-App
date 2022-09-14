import React from 'react';

const Header = ({handleToggleDarkMode}) => {
  return (
    <div className="header">
      <h1>NotePad</h1>
      <label className="switch">
        <input type="checkbox" onClick={()=> handleToggleDarkMode((previousDarkMode)=> !previousDarkMode)} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Header;
