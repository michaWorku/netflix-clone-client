import { FC } from 'react'

import {  useEffect, useState } from "react";
import "./Navbar.scss";
import NavLinks from './NavLinks';
import Profile from './Profile';



const Navbar : FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <NavLinks />
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;