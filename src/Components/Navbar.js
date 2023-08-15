import React from 'react';
import LogoImage from './Images/icon.png';

function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <a href="#top">
                    <img src={LogoImage} alt="Logo" className="logo-img" />
                </a>
            </div>
            <div className="nav-links">
                <a href="/why-us.html">Why us</a>
                <a href="/services.html">Services</a>
                <a href="/location.html">Locations</a>
                <a href="/contact.html">Contact Us</a>
            </div>
        </div>
    );
}

export default NavBar;
