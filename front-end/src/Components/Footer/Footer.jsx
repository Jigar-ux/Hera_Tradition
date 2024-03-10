import React from "react";
import "./Footer.css";
import logo from "../Assets/logo.png";
import instagram from "../Assets/instagram_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
        <p>Hera Tradition</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socials-icon">
        <div className="footer-icon-container">
          <a
            href="https://www.instagram.com/hera__tradition/?igsh=MW1md2t6MjNsZ2xxeA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="" />
          </a>
        </div>
        <div className="footer-icon-container">
          <a
            href="https://api.whatsapp.com/message/NTORW2VPGYT3G1?autoload=1&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-copy-right">
        <hr />
        <p>Copyright @2024 - All Right Riserved</p>
      </div>
    </div>
  );
};

export default Footer;
