import Link from "next/link";
import React, { useEffect, useState } from "react";
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
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  const [screenWidth, setScreenWidth] = useState<Number>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    } else {
      return 380;
    }
  });

  const handleClickHamburger = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <header className={styles.navbarRoot}>
      <div className={`px-8 max-w-screen-xl mx-auto ${styles.navbar}`}>
        <Logo />
        <div
          className='md:hidden block cursor-pointer'
          onClick={handleClickHamburger}>
          <HamburgerIcon />
        </div>
        <NavLink
          showMenu={showMenu}
          screenWidth={screenWidth}
          handleClickHamburger={handleClickHamburger}
        />

        <div className='hidden lg:flex items-center font-bold text-lg'>
          <Link href='/register'>
            <a className='text-white mr-5'>REGISTER</a>
          </Link>
          <Link href={"/login"}>
            <Button type='button' label='LOGIN' />
          </Link>
        </div>
      </div>
    </header>
  );
}

interface NavLinkProps {
  showMenu: Boolean;
  screenWidth: Number;
  handleClickHamburger: Function;
}
const NavLink = ({
  showMenu,
  screenWidth,
  handleClickHamburger,
}: NavLinkProps) => {
  return (
    <div
      className={`hidden lg:flex ${styles.nav} ${
        showMenu && screenWidth <= 768 ? styles.show : ""
      }`}
      id='nav-item'>
      {showMenu && screenWidth <= 768 && (
        <div
          className='absolute right-5 mt-5 cursor-pointer'
          onClick={() => handleClickHamburger()}>
          <SilangIcon />
        </div>
      )}

      <ul>
        {navItem.map((row, index) => {
          return (
            <li key={index}>
              <Link href={row.link}>{row.name}</Link>
            </li>
          );
        })}
      </ul>

      {showMenu && screenWidth <= 768 && (
        <div className='mx-auto flex justify-center'>
          <Button type='button' label='LOGIN' />
        </div>
      )}
    </div>
  );
};

const SilangIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6 text-xl text-white font-bold'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  );
};
const HamburgerIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6 text-gray-500'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  );
};

export default Navbar;
