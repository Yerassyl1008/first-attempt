"use client";

import Image from "next/image";
import { FC, useState } from "react";
import styles from './styles.module.css';

type LeftMenuItemProps = {
  icon: string;
  label: string;
  childrenItems?: Array<{ label: string }>;
}

const LeftMenuItem:FC<LeftMenuItemProps> = ({ icon, label, childrenItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isHasArrow = childrenItems.length > 0;


  const toggleSubmenu = () => {
    if (isHasArrow) setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div 
        className="menu__item-container"
        onClick={toggleSubmenu}
        style={{
          cursor: isHasArrow ? "pointer" : "default",
        }}
      >
        <div className="menu__item">
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Image src={icon} alt={label} width={20} height={20} />
            <span>{label}</span>
          </div>
          {isHasArrow && (
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

      {isOpen && childrenItems && (
        <ul className="submenu">
          {childrenItems.map((subItem, idx) => (
            <li key={idx}>
              <button className="side__button">{subItem.label}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export {LeftMenuItem};