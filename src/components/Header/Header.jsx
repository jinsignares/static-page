import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { links } from "../../utils/constants";
import "./style.css";

export const Header = () => {
  return (
    <nav className="header">
      <Link className="logo-wrapper" to={"/"}>
        <img
          className="logo-img"
          alt="Baaqmd Header Logo"
          src="/img/baaqmd-logo-fullcolor-black-2.png"
        />
      </Link>
      <div className="nav-wrapper">
        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.id} className="nav-item" to={link.to}>
              {link.title}
            </Link>
          ))}
        </div>
        <Button
          color="brick"
          icon={false}
          size="large"
          text="DOWNLOAD PDF"
          type="filled"
        />
      </div>
      <div className="hamburger-menu-wrapper"></div>
    </nav>
  );
};
