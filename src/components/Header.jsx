import logo from "../assets/Layer2.png";
import atDigital from "../assets/Group94.png";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setOpen] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const openToggle = () => setOpen((preV) => !preV);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setOpen(false);
    }
    setScreenWidth(window.innerWidth);
  });

  return (
    <header>
      <div className="logoImg">
        <img src={logo} alt="Company Logo" />
        <img src={atDigital} alt="Company Name" />
      </div>

      {screenWidth <= 768 ? (
        <>
          <button className="nav-toggle" onClick={openToggle}>
            {isOpen ? (
              <FaTimes size="40px" className="close-menu" color="#000000" />
            ) : (
              <FaBars size="40px" color="#ffffff" />
            )}
          </button>

          <div className={`side-menu ${isOpen ? "open" : ""}`}>
            <div className="menu-header">
              <span></span>
              <button className="close-btn" onClick={openToggle}></button>
            </div>

            <ul>
              <li>SERVICES</li>
              <li>ABOUT US</li>
              <li>CONTACT US</li>
              <li>CAREERS</li>
            </ul>
          </div>
        </>
      ) : (
        <nav>
          <ul>
            <li>SERVICES</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>CAREERS</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
