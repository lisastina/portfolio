import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useScrollLock } from "../hooks/useScrollLock";

const Navbar = () => {
  const [clickedBurger, setClickedBurger] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const handleBurgerClick = () => {
    if (clickedBurger === false) {
      setClickedBurger(true);
      lockScroll();
      window.scroll({
        top: 0,
        left: 0,
      });
    }
    if (clickedBurger === true) {
      setClickedBurger(false);
      unlockScroll();
    }
  };

  /* Close hamburger menu if window resizes */
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

        {/* Hamburger icon */}
        <div className="burger" onClick={handleBurgerClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Navigation links */}
      <ul className="navlinks">
        <li>
          <Link to="/kontakt" onClick={() => setClickedBurger(false)}>
            Kontakt
          </Link>
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
