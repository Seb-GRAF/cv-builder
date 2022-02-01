import React from "react";
import "../styles/Header.scss";

export default function Header({ handleFlip }) {
  return (
    <header>
      <div className="logo">
        <h1>CV Builder</h1>
      </div>
      <div className="header-buttons">
        <button className="flip" onClick={handleFlip}>
          Flip
        </button>
      </div>
    </header>
  );
}
