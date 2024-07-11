import React, { useState } from "react";
// import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center p-5">
        <div className="flex items-center">
          <img src='{}' alt="logo" className="w-20" />
        </div>
        <ul className={`flex space-x-6 text-black font-semibold ${menuOpen ? 'block' : 'hidden'} md:flex`}>
          <li><a href="#about">About Me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <i className="fas fa-times md:hidden block" onClick={closeMenu}></i>
        </ul>
        <i className="fas fa-bars md:hidden block" onClick={openMenu}></i>
      </nav>
    </header>
  );
};

export default Header;
