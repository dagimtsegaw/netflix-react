import React, { useState } from "react";
import "./header.css";
import Netflixlogo from "../../assets/Images/Netflix-Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu"; // Import Hamburger Icon

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  // Toggle the menu for mobile devices
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_logo">
          <img src={Netflixlogo} width="100" />
        </div>
        <div className="header_left">
          <ul className={menuActive ? "active" : ""}>
            <li>
              <a href="netflix">Netflix</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#tv-shows">TV Shows</a>
            </li>
            <li>
              <a href="#movies">Movies</a>
            </li>
            <li>
              <a href="#latest">Latest</a>
            </li>
            <li>
              <a href="#my-list">My List</a>
            </li>
            <li>
              <a href="#browse-by-language">Browse by Language</a>
            </li>
          </ul>
          <div className="menu_toggle" onClick={toggleMenu}>
            <MenuIcon />
          </div>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
