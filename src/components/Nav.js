import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [clickedBurger, setClickedBurger] = useState(true);

  useEffect(() => {
    function handleResize() {
      setClickedBurger(false);
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`${clickedBurger && "clickedBurger"}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/assets/logo-sm.png" alt="logo" />
        </Link>

        {/* Hamburger menu */}
        <div
          className="burger"
          onClick={() => setClickedBurger(!clickedBurger)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Navigation links */}
      <ul className="navlinks">
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
        <li>
          <a href="https://www.instagram.com/lisastina.h/">Instagram</a>
        </li>
        <li>
          <a href="https://github.com/lisastina">Github</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
