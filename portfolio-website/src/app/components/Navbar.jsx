"use client"

import React, { useState } from "react";
import NavLink from "./NavLink";

const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Experience",
      path: "#experience",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
      },
  ];

  const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  
    return (
      <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
        <div className="flex container lg:py-4 flex-wrap items-center justify-end mx-auto px-4 py-2">
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;