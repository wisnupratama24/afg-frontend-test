import React from "react";
import Image from "next/image";
import styles from "./Home.module.scss";

import CandyImg from "~/assets/png/candy.png";
import GameconomyImg from "~/assets/png/gameconomy.png";
import JericverseImg from "~/assets/png/jericverse.png";
import LemonImg from "~/assets/png/lemon.png";

const ListCompany = [
  {
    name: "Candy",
    src: CandyImg,
  },
  {
    name: "Lemon",
    src: LemonImg,
  },
  {
    name: "Jericverse",
    src: JericverseImg,
  },
  {
    name: "Gameconomy",
    src: GameconomyImg,
  },
];
function CompanyList() {
  return (
    <div className={styles.wrapCards}>
      <ElipseOne />
      <ElipseTwo type='elipsetwo' />
      <ElipseTwo type='elipsethree' />

      <div className={styles.cards}>
        {ListCompany.map((row, index) => {
          return (
            <div className={styles.item} key={index}>
              <Image src={row.src} alt={row.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ElipseOne = () => {
  return (
    <div className={styles.elipseone}>
      <svg
        width='599'
        height='599'
        viewBox='0 0 599 599'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g filter='url(#filter0_f_512_4)'>
          <circle
            cx='299.583'
            cy='299.583'
            r='79.184'
            transform='rotate(-28.8852 299.583 299.583)'
            fill='#FF3399'
            fillOpacity='0.6'
          />
        </g>
        <defs>
          <filter
            id='filter0_f_512_4'
            x='0.847778'
            y='0.848022'
            width='597.47'
            height='597.47'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='109.768'
              result='effect1_foregroundBlur_512_4'
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

interface ElipseProps {
  type: string;
}

const ElipseTwo = ({ type }: ElipseProps) => {
  return (
    <div className={styles[type]}>
      <svg
        width='599'
        height='599'
        viewBox='0 0 599 599'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g filter='url(#filter0_f_411_730)'>
          <circle
            cx='299.583'
            cy='299.583'
            r='79.184'
            transform='rotate(-28.8852 299.583 299.583)'
            fill='url(#paint0_linear_411_730)'
            fillOpacity='0.6'
          />
        </g>
        <defs>
          <filter
            id='filter0_f_411_730'
            x='0.847778'
            y='0.8479'
            width='597.47'
            height='597.47'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='109.768'
              result='effect1_foregroundBlur_411_730'
            />
          </filter>
          <linearGradient
            id='paint0_linear_411_730'
            x1='299.583'
            y1='220.399'
            x2='299.583'
            y2='378.767'
            gradientUnits='userSpaceOnUse'>
            <stop stop-color='#A8D7DF' />
            <stop offset='1' stop-color='#6CCCE4' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CompanyList;
