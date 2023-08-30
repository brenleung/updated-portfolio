import React from 'react';
import './navbar.css';
import logo from '../imgs/updated-logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="navbar">
        <Link to="/"><img src={logo} alt="logo"></img></Link>
        <p className="navbar-temp">This navbar is currently a WIP for mobile devices.</p>
        <ul>
            <li>
                <Link to="/projects"><p>PROJECTS</p></Link>
            </li>
            <li>
                <Link to="/about-me"><p>ABOUT ME</p></Link>
            </li>
            <li>
                <Link to="/resume"><p>RESUME</p></Link>
            </li>
            <li>
                <Link to="/contact"><p>CONTACT</p></Link>
            </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  