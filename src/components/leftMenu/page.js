"use client";

import Image from "next/image";
import { useState } from "react";

const LeftMenuItem = ({ icon, label, hasArrow, childrenItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    if (hasArrow) setIsOpen(!isOpen);
  };

  return (
    <div className="menu__wrapper">
      <div 
        className="menu__item-container"
        onClick={toggleSubmenu}
        style={{
          cursor: hasArrow ? "pointer" : "default",
        }}
      >
        <div className="menu__item">
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Image src={icon} alt={label} width={20} height={20} />
            <span>{label}</span>
          </div>
          {hasArrow && (
            <Image
              src="/Icon_Arrow Down A.svg"
              alt="arrow"
              width={14}
              height={8}
              className={`arrow-icon ${isOpen ? "rotate-180" : ""}`}
            />
          )}
        </div>
      </div>

      {/* {isOpen && hasArrow && (
        <ul className="submenu">
          {childrenItems.map((subItem, idx) => (
            <li key={idx}>
              <button className="side__button">{subItem.label}</button>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default LeftMenuItem;