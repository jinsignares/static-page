import React from "react";
import { Link } from "react-router-dom";
import { footerLinks, contactPhones } from "../../utils/constants";
import "./style.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <address className="address-section font-sizes">
        <span>375 Beale Street, Suite 600</span>
        <span>San Francisco, CA 94105</span>
      </address>

      <address className="footer-contact-info font-sizes">
        <div className="footer-contact-info-wrapper">
          <div className="contact-phone-numbers">
            {contactPhones.map((phone) => (
              <>
                <Link key={phone.id} className="phone-number" to={`tel:+1${phone.number}`}>
                  {phone.title}
                </Link>
                <span className="bar">|</span>
              </>
            ))}
          </div>

          <div className="footer-links">
            {footerLinks.map((link) => (
              <>
                <Link key={link.id} className="footer-link" to={link.to}>
                  {link.title}
                </Link>
                <span className="dot">•</span>
              </>
            ))}
          </div>
        </div>
      </address>

      <img
        className="footer-logo"
        alt="Baaqmd Footer Logo"
        src="/img/baaqmd-logo-fullcolor-black-2.png"
      />
    </footer>
  );
};