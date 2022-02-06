import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "~/components";
import styles from "./Home.module.scss";
import TwitterIcon from "~/assets/png/twitter.png";
import MediumIcon from "~/assets/png/medium.png";
import TelegramIcon from "~/assets/png/telegram.png";
import DiscordIcon from "~/assets/png/discord.png";
import GithubIcon from "~/assets/png/github.png";

function FooterSection() {
  return (
    <>
      <div className={`${styles.footerSection} mx-auto w-4/5 mt-10`}>
        <div>
          <Logo />
          <div className={`${styles.titleAfterLogo} pt-5`}>
            <span> METAVERSE GAMING </span> <br />
            <span>BY JOY GAME PLAYER</span>
          </div>
        </div>

        <div>
          <p className={styles.titleFooter}>OUR SERVICES</p>

          <ul className='mt-10'>
            <li>
              <Link href={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link href={"/store"}>store</Link>
            </li>
            <li>
              <Link href={"/gamebox"}>gamebox</Link>
            </li>
            <li>
              <Link href={"/token"}>token</Link>
            </li>
            <li>
              <Link href={"/stacking"}>stacking</Link>
            </li>
            <li>
              <Link href={"/docs"}>docs</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className={styles.titleFooter}>HELP</p>

          <ul className='mt-10'>
            <li>
              <Link href={"/help"}>help</Link>
            </li>
            <li>
              <Link href={"/faq"}>faqa</Link>
            </li>
            <li>
              <Link href={"/contact"}>contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className={styles.titleFooter}>JOIN OUR COMMUNITY</p>

          <div className={styles.sosmedList}>
            <Link href='/twitter'>
              <div>
                <Image src={TwitterIcon} alt='Twitter Icon' />
              </div>
            </Link>
            <Link href='/twitter'>
              <div>
                <Image src={MediumIcon} alt='Twitter Icon' />
              </div>
            </Link>{" "}
            <Link href='/twitter'>
              <div>
                <Image src={DiscordIcon} alt='Twitter Icon' />
              </div>
            </Link>{" "}
            <Link href='/twitter'>
              <div>
                <Image src={TelegramIcon} alt='Twitter Icon' />
              </div>
            </Link>
            <Link href='/twitter'>
              <div>
                <Image src={GithubIcon} alt='Twitter Icon' />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div
        className='text-white flex md:flex-row flex-col md:gap-0 gap-4 mx-auto text-center justify-center py-10'
        style={{
          fontSize: "18px",
        }}>
        <span> &copy; 2022 Joy Games</span>
        <span className='md:mx-3 mx-0 hidden md:block'>|</span>
        <span> Terms & Conditions </span>
        <span className='md:mx-3 mx-0 hidden md:block'>|</span>
        <span
          style={{
            fontWeight: "300",
          }}>
          {" "}
          Privacy Policy{" "}
        </span>{" "}
      </div>
    </>
  );
}

export default FooterSection;
