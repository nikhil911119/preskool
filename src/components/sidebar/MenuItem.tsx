import React, { useState } from "react";
import { MenuItemProps } from "./Sidebar.types";

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  type,
  dropItems,
  link,
}) => {
  const [ToggleDropdown, setToggleDropdown] = useState("hidden");
  const handleToggle = () => {
    ToggleDropdown == "hidden"
      ? setToggleDropdown("block")
      : setToggleDropdown("hidden");
  };
  return (
    <>
      {type === "dropdown" && dropItems && (
        <div className="each-menu">
          <h2
            className="flex cursor-pointer p-[8px] rounded-[5px] gap-4 mb-2"
            onClick={handleToggle}
          >
            <div className="h-[16px] w-[16px]">{icon}</div>
            {label}
          </h2>
          <ul className={`dropdown-list  ${ToggleDropdown} `}>
            {dropItems.map((dropdown, dropIndex) => (
              <li
                key={dropIndex}
                className="dropdown-item text-gray-600 p-[8px] ml-7"
              >
                <a href={dropdown.path}>{dropdown.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {type === "link" && (
        <>
        <a href={link}></a>
          <h2
            className="flex cursor-pointer p-[8px] bg-transparent rounded-[5px] gap-4 mb-2"
            onClick={handleToggle}
          >
            <div className="h-[16px] w-[16px]">{icon}</div>
            {label}
          </h2>
        </>
      )}
    </>
  );
};

export default MenuItem;
