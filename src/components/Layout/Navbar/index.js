import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setToggle }) => {
    return (
        <div className="navbar">
            <div className="brand">
                <div className="hamburger" onClick={setToggle}>
                    <div />
                    <div />
                    <div />
                </div>
                <div className="logo">
                    <Link to="/">Message App</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
