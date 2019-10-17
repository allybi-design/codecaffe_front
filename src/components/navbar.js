import React from "react";

import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div id="logoheader">
        <div id="logo">
          <img
            id="logoText"
            src="/images/coffeeLogo.png"
            alt="Coffee logo"
            height="145px"
            width="200px"
          />
        </div>

        <div id="title">
          <h1>Code Cafe</h1>
        </div>
      </div>
    </div>
  );
}
