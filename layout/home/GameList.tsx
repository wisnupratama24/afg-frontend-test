import Link from "next/link";
import React from "react";
import styles from "./Home.module.scss";

import ClawStar from "~/assets/png/clawstar.png";
import Masketeers from "~/assets/png/masketeers.png";
import Moonland from "~/assets/png/moonland.png";
import TheLast from "~/assets/png/thelast.png";
import AxieInfinity from "~/assets/png/axie-infinity.png";
import Kimetsu from "~/assets/png/kimetsu.png";
import { LinkItem } from "~/components";

const buttonList = [
  {
    name: "Adventure",
    link: "/advanture",
  },
  {
    name: "Arcade",
    link: "/arcade",
  },
  {
    name: "Race",
    link: "/race",
  },
  {
    name: "Open World",
    link: "/open-world",
  },
  {
    name: "RPG",
    link: "/rpg",
  },
  {
    name: "MMORPG",
    link: "/mmorpg",
  },
  {
    name: "FPS",
    link: "/fps",
  },
  {
    name: "Multiplayer",
    link: "/multiplayer",
  },
];

const gameList = [
  {
    name: "Claw Stars",
    src: ClawStar,
    desc: "Enter the world of Masketeers where brave heroes empowered by mysterious masks take a stand against the inner demons of society. Soon you will be able to adorn yourself with exclusive NFT Costumes that can empower your Masketeers as they unleash their attacks on the manifestations of negativity.",
  },
  {
    name: "Masketeers",
    src: Masketeers,
    desc: "Enter the world of Masketeers where brave heroes empowered by mysterious masks take a stand against the inner demons of society. Soon you will be able to adorn yourself with exclusive NFT Costumes that can empower your Masketeers as they unleash their attacks on the manifestations of negativity.",
  },
  {
    name: "The Last",
    src: TheLast,
    desc: "Enter the world of Masketeers where brave heroes empowered by mysterious masks take a stand against the inner demons of society. Soon you will be able to adorn yourself with exclusive NFT Costumes that can empower your Masketeers as they unleash their attacks on the manifestations of negativity.",
  },
  {
    name: "Moonland",
    src: Moonland,
    desc: "Enter the world of Masketeers where brave heroes empowered by mysterious masks take a stand against the inner demons of society. Soon you will be able to adorn yourself with exclusive NFT Costumes that can empower your Masketeers as they unleash their attacks on the manifestations of negativity.",
  },
  {
    name: "Axie Infinity",
    src: AxieInfinity,
    desc: "Enter the world of Masketeers where brave heroes empowered by mysterious masks take a stand against the inner demons of society. Soon you will be able to adorn yourself with exclusive NFT Costumes that can empower your Masketeers as they unleash their attacks on the manifestations of negativity.",
  },
  {
    name: "Kimetsu Hero",
    src: Kimetsu,
    desc: "Enter the world of Masketeers where brave heroes empowered by mysterious masks take a stand against the inner demons of society. Soon you will be able to adorn yourself with exclusive NFT Costumes that can empower your Masketeers as they unleash their attacks on the manifestations of negativity.",
  },
];

function GameList() {
  return (
    <div className={`mt-20 pb-10 text-center ${styles.gameList}`}>
      <p className={styles.title}>Upcoming Games</p>
      <p className={`${styles.desc} md:w-3/5 w-4/5 pt-10`}>
        Joy Games aims to not just create a platform but also will play an
        active role in the development and curation of gaming content on the
        platform, the upkeep of the codebase, and the development of new
        exciting ways to implement gamified finance into existing or new games,
        via a mixture of of inhouse development or co-development with our
        strategic partners, who are experienced and successful game development
        studios.
      </p>

      <div className={`${styles.buttonList} pt-10 mx-auto w-4/5`}>
        {buttonList.map((row, index) => {
          return (
            <LinkItem
              key={index}
              name={row.name}
              url={row.link}
              style={{
                padding: "0.5rem 1rem",
                fontSize: "18px",
              }}
            />
          );
        })}
      </div>

      <div className={`${styles.wrapCardGameList} mt-16 mx-auto w-4/5`}>
        {gameList.map((row, index) => {
          return (
            <CardGameList
              key={index}
              name={row.name}
              src={row.src}
              desc={row.desc}
            />
          );
        })}
        <ElipseRed />
        <ElipseBlue />
      </div>

      <LinkItem
        name='VIEW MORE'
        url='/view-more'
        style={{
          width: "200px",
          fontSize: "14px",
          display: "flex",
          justifyContent: "center",
          margin: "3rem auto",
        }}
      />
    </div>
  );
}

interface CardGameListInterface {
  desc: String;
  src: StaticImageData;
  name: string;
}

const CardGameList = ({ desc, src, name }: CardGameListInterface) => {
  return (
    <div className={styles.cardGameList}>
      <div
        className={styles.overlay}
        style={{
          backgroundImage: `url("${src.src}")`,
        }}></div>

      <div className={styles.name}>
        {name}
        <div className={styles.desc}>{desc}</div>
      </div>
    </div>
  );
};

const ElipseRed = () => {
  return (
    <div className={styles.elipseRed}>
      <svg
        width='1677'
        height='1677'
        viewBox='0 0 1677 1677'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g filter='url(#filter0_f_411_839)'>
          <circle
            cx='838.081'
            cy='838.081'
            r='238.081'
            fill='#FF3399'
            fillOpacity='0.6'
          />
        </g>
        <defs>
          <filter
            id='filter0_f_411_839'
            x='0'
            y='0'
            width='1676.16'
            height='1676.16'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='300'
              result='effect1_foregroundBlur_411_839'
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

const ElipseBlue = () => {
  return (
    <div className={styles.elipseBlue}>
      <svg
        width='1677'
        height='1677'
        viewBox='0 0 1677 1677'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g filter='url(#filter0_f_411_840)'>
          <circle
            cx='838.081'
            cy='838.081'
            r='238.081'
            fill='url(#paint0_linear_411_840)'
            fillOpacity='0.6'
          />
        </g>
        <defs>
          <filter
            id='filter0_f_411_840'
            x='0'
            y='0'
            width='1676.16'
            height='1676.16'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='300'
              result='effect1_foregroundBlur_411_840'
            />
          </filter>
          <linearGradient
            id='paint0_linear_411_840'
            x1='838.081'
            y1='600'
            x2='838.081'
            y2='1076.16'
            gradientUnits='userSpaceOnUse'>
            <stop stop-color='#A8D7DF' />
            <stop offset='1' stop-color='#6CCCE4' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GameList;
