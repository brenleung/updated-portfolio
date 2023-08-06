import React from 'react';
import './navbar.css';
import logo from '../imgs/logo-trans.png';

function Navbar() {
    return (
      <div className="navbar">
        <img src={logo} alt="logo"></img>
        <p>| This website is a work in progress.</p>
      </div>
    );
  }
  
  export default Navbar;
  