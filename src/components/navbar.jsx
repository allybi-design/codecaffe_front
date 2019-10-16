import React from 'react';

import '../styles/navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div id="logoheader">
          <div id="logo">
            <img id="logoText" src="images/coffeeLogo.png" alt="Coffee logo" height="145px" width="200px"/>
          </div>
 
          <div id="title">
            <h1>Code Cafe</h1>
          </div>
        </div>
 
        <div id="buttons">
          <button type="coffee">Coffee</button>
          <button type="loyalty">Loyalty</button>
          <button type="Location">Location</button>
          <button type="Spill">Spill the beans!</button>
          <button type="sign">Sign In / Register</button>
        </div>

 
      </div>
    );
  }
 }

export default Navbar;