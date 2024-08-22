import React from "react";
import Image from "next/image";
function Navbar() {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/about" },
    { label: "About", href: "/contact" },
    { label: "Data", href: "/contact" },
    { label: "Contact", href: "/contact" },

    // Add more menu items as needed
  ];
  return (
    <header>
      <nav>
        <div>
          <Image
            src={"/logo/rynopay_logo.svg"}
            alt="zatum logo"
            height={"68"}
            width={"92"}
          />

          <ul>
            <li>
              <a href="#about-us">Home</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div></div>
      </nav>
    </header>
  );
}

export default Navbar;
