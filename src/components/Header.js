import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>CV Builder</h1>
      </div>
      <div className="header-buttons">
        <button className="flip">Flip</button>
      </div>
    </header>
  );
};
export default Header;
