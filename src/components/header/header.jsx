import React, { useState } from "react";
import './headerStyle.css'
const Header = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    return (
         <nav className="navbar">
      <div className="navbar-container">
        {/* Logo section */}
        <a href="/" className="navbar-logo">
          {/* Add your logo image here */}
          <img src="src\assets\goodLogo.jpg" alt="" />
        </a>

        {/* Search bar section */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search designs & products"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          {/* Add a search icon here */}
        </div>

        {/* Categories section */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/categories" className="nav-links">
              Categories
            </a>
          </li>
          {/* Add more category links here */}
        </ul>

        {/* Sign up/Login section */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/register" className="nav-links-button">
              Sign Up
            </a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-links-button">
              Log In
            </a>
          </li>
        </ul>
      </div>
    </nav>
    );
};

export default Header;


