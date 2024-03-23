import chevronRight from "../../assets/images/ChevronRight.svg";

import "./submenu.css";

const SubMenu = ({ items }) => {
  return (
    <ul className="submenu">
      {items.map((item, index) => {
        return (
          <li key={`${item}_${index}`}>
            {item} <img src={chevronRight} alt="mobile menu chevron" />
          </li>
        );
      })}
    </ul>
  );
};

export default SubMenu;
