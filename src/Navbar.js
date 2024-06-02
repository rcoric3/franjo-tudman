import React from "react";
import { Link } from "wouter";
import "./css/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/croatia" className="nav-link">
            Croatia
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/albania" className="nav-link">
            Albania
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
