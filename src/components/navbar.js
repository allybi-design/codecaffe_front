import React from 'react';

import '../styles/navbar.css';

import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from "react-router-dom"




export default function Navbar () {

    return (
      <Router>
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
         
         

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       
         
        </div>
      </Router>
    );
}


