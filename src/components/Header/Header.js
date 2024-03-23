import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

import logo from "../../assets/images/Logo.png";
import chevronDown from "../../assets/images/ChevronDown.svg";
import hamburger from "../../assets/images/Hanburger.svg";
import searchIcon from "../../assets/images/Search.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import SubMenu from "../SubMenu/SubMenu";

import "./header.css";

const Header = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navBarHide, setNavBarHide] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleChange = (event) => {
    setSearchText(event.target.value);
    handleSearchUpdate(event);
  };

  const handleSearchUpdate = debounce(() => {
    onSearch(searchText);
  }, 500);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setNavBarHide(true);
      } else {
        setNavBarHide(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header-wrapper">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search for posts..."
          value={searchText}
          onChange={handleChange}
        />
        <img src={searchIcon} alt="search" />
      </div>
      <div className="logo-wrapper">
        <div className="hamburger" onClick={toggleMobileMenu}>
          <img src={hamburger} alt="hamburger icon" />
        </div>
        <img className="main-logo" src={logo} alt="logo" />
        <div>
          <img src={searchIcon} alt="search" />
        </div>
      </div>
      <div className={`navbar ${navBarHide ? "hide" : ""}`}>
        <div className="menu-container">
          <ul className="menu">
            <li>
              <div>
                <span>Demos</span>
                <img src={chevronDown} alt="menu arrow" />
              </div>
              <SubMenu
                items={[
                  "Post Header",
                  "Post Layout",
                  "Share Buttons",
                  "Gallery Post",
                  "Video Post",
                ]}
              />
            </li>
            <li>
              <div>
                <span>Post</span>
                <img src={chevronDown} alt="menu arrow" />
              </div>
              <SubMenu
                items={[
                  "Post Header",
                  "Post Layout",
                  "Share Buttons",
                  "Gallery Post",
                  "Video Post",
                ]}
              />
            </li>
            <li>
              <div>
                <span>Features</span>
                <img src={chevronDown} alt="menu arrow" />
              </div>
              <SubMenu
                items={[
                  "Features Header",
                  "Features Layout",
                  "Share Buttons",
                  "Gallery Features",
                  "Video Features",
                ]}
              />
            </li>
            <li>
              <div>
                <span>Categories</span>
                <img src={chevronDown} alt="menu arrow" />
              </div>
              <SubMenu
                items={[
                  "Categories Header",
                  "Categories Layout",
                  "Share Buttons",
                  "Categories Gallery",
                ]}
              />
            </li>
            <li>
              <div>
                <span>Shop</span>
                <img src={chevronDown} alt="menu arrow" />
              </div>
              <SubMenu
                items={[
                  "Shop Header",
                  "Shop Layout",
                  "Share Buttons",
                  "Gallery Shop",
                  "Video Shop",
                ]}
              />
            </li>
            <li>
              <div>
                <span>Buy now</span>
                <img src={chevronDown} alt="menu arrow" />
              </div>
              <SubMenu
                items={[
                  "Buy Now Header",
                  "Buy Now Layout",
                  "ShareButtons",
                  "Gallery Buy Now",
                  "Video Buy Now",
                ]}
              />
            </li>
          </ul>
        </div>
      </div>
      {mobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
    </div>
  );
};

export default Header;
