import React from "react";
import "../assets/styles/header.scss";
import "../assets/styles/header.responsive.scss";


function Header() {
  return (
    <div className="main-container">
      <div className="parent-container">
        <h1 className="hero-heading">Sample heading</h1>
        <div className="sub-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio incidunt quae voluptas tempore dolorem, autem officia libero soluta.
        </div>
      </div>
    </div>
  );
}

export default Header;
