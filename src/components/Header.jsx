import { useState } from "react";
import "./Header.css";
import logo from "/assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="left">
          <img src={logo} alt="logo" />
        </div>

        <div className={`right ${open ? "active" : ""}`}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Contact</a>
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
