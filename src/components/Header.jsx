import { useState } from "react";
import "./Header.css";
import logo from "/assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="left">
          <img src={logo} alt="logo" />
        </div>

        <div className={`right ${open ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="hamburger">
          <button className={`hamburger-button ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
