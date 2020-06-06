import React from 'react'
import logo from "../images/logo.jpg";

const Footer = () => {
    return (
        <div className="footer-container">

        <p className="name">
           <h2>Visiter♡La♡Tunisie <img src={logo} alt="logo" className="footer-logo" /></h2>
           made by Dorsaf
        </p>
        <p className="name">Visiter♡La♡Tunisie Corporation © 2020</p>
        </div>
    )
}

export default Footer

