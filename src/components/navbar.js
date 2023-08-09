import React from 'react';
import './navbar.css';
import logo from '../imgs/logo-trans.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <div className="navbar">
        <Link to="/"><img src={logo} alt="logo"></img></Link>
        <p>This website is a work in progress. Links are not functional at this time.</p>
        {/* <Link to="/"><p>PROJECTS</p></Link>
        <Link to="/"><p>ABOUT ME</p></Link>
        <Link to="/"><p>RESUME</p></Link>
        <Link to="/"><p>CONTACT ME</p></Link> */}
      </div>
    );
  }
  
  export default Navbar;
  