import React, { useState } from 'react';
import './navbar.css';
import logo from '../imgs/updated-logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);  // default for menu being open is false

    const navMobileClick = () => {
        setMenuOpen(false);  // close menu upon clicking link
    }

    return (
      <nav className="navbar">
        <div className="top-bar">
            <Link to="/"><img src={logo} alt="logo"></img></Link>

            <div className="menu" onClick={() => {setMenuOpen(!menuOpen)}}>
                <FontAwesomeIcon icon={faBars} size="xl" className={menuOpen ? "closed" : "open"} />
                <FontAwesomeIcon icon={faXmark} size="xl" className={menuOpen ? "open" : "closed" } />
            </div>
        </div>
        
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <Link to="/projects" onClick={navMobileClick}><p>PROJECTS</p></Link>
            </li>
            <li>
                <Link to="/about-me" onClick={navMobileClick}><p>ABOUT ME</p></Link>
            </li>
            <li>
                <Link to="/resume" onClick={navMobileClick}><p>RESUME</p></Link>
            </li>
            <li>
                <Link to="/contact" onClick={navMobileClick}><p>CONTACT</p></Link>
            </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  