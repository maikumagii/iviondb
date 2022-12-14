import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            IVIONDB
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/explore"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/help" className="nav-links" onClick={closeMobileMenu}>
                Help
              </Link>
            </li>
            <li className="nav-v1">|</li>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Your Decks
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/collection"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Collection
              </Link>
            </li>
            <li className="nav-v1"/>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/preferences"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Preferences
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-in"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
