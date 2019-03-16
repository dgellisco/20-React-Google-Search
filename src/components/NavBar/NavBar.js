import React from "react";
import "./NavBar.css";

const NavBar = (props) => (
    <div className="navbar-div">
        <h1 className="navbar-title">Google Books</h1>
        <ul className="navbar-links-div">
            <li className="navbar-links">Search</li>
            <li className="navbar-links">Saved</li>
            <li className="navbar-links">Contact</li>
        </ul>
    </div>
);

export default NavBar;