import Link from "next/link";
import React from "react";
import { Button, Logo } from "..";
import styles from "./Navbar.module.scss";

const navItem = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "store",
    link: "/store",
  },
  {
    name: "gamebox",
    link: "/gamebox",
  },
  {
    name: "token",
    link: "/token",
  },
  {
    name: "staking",
    link: "/staking",
  },
  {
    name: "docs",
    link: "/docs",
  },
];

function Navbar() {
  return (
    <header>
      <div className={`px-8 ${styles.navbar}`}>
        <Logo />
        <NavLink />

        <div>
          <Button type='button' label='LOGIN' />
        </div>
      </div>
    </header>
  );
}

const NavLink = () => {
  return (
    <div className={styles.nav}>
      <ul>
        {navItem.map((row, index) => {
          return (
            <li key={index}>
              <Link href={row.link}>
                <a> {row.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
