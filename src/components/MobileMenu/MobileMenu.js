import { useEffect } from "react";

import logo from "../../assets/images/Logo.png";
import chevronDown from "../../assets/images/ChevronDown.svg";

import "./mobileMenu.css";

const MobileMenu = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <>
      <div className="mobile-menu-overlay" onClick={onClose}></div>
      <div className="mobile-menu">
        <div className="mobile-menu-header">
          <img src={logo} alt="mobile menu logo" />
          <span onClick={onClose}>&times;</span>
        </div>
        <ul>
          <li>
            Demos <img src={chevronDown} alt="mobile menu chevron" />
          </li>
          <li>
            Post <img src={chevronDown} alt="mobile menu chevron" />
          </li>
          <li>
            Features <img src={chevronDown} alt="mobile menu chevron" />
          </li>
          <li>
            Categories <img src={chevronDown} alt="mobile menu chevron" />
          </li>
          <li>
            Shop <img src={chevronDown} alt="mobile menu chevron" />
          </li>
          <li>
            Buy now <img src={chevronDown} alt="mobile menu chevron" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
