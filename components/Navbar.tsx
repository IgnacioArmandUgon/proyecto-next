import React from "react";
import styles from "../styles/navbar.module.css";
import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {
  const menuItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Pricing",
      href: "/pricing/pricing",
    },
  ];
  return (
    <div>
      <nav className={styles.menu}>
        {menuItems.map((item, key) => (
          <ActiveLink key={key} href={item.href} text={item.text} />
        ))}
      </nav>
    </div>
  );
};
