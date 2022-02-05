import React from "react";
import { Logo } from "~/components";
import styles from "./Home.module.scss";

function VideoSection() {
  return (
    <div className={styles.videoSection}>
      <div className='ml-0'>
        <p className={styles.title}>INTO THE METAVERSE</p>
        <p className={styles.desc}>
          Earn, trade, stake, farm and swap your game assets the way you want.
          Welcome to a metaverse that lets you truly decide how you want to
          play.
        </p>
      </div>
      <div className={styles.video}>
        <div className={styles.overlay}>
          <div>
            <div className='md:-mt-12 md:block hidden'>
              <Logo />
            </div>
            <div className='mt-24 cursor-pointer'>
              <PlayIcon />
            </div>
          </div>
        </div>
      </div>
      <div className='mr-0'>
        <p className={styles.desc}>
          This is for all the gamers out there no matter who you are, whether
          you're a newbie or a whale. It's time to game on your own terms.
          Welcome to Joy Games - Metaverse gaming by true game makers.
        </p>
      </div>
    </div>
  );
}

const PlayIcon = () => {
  return (
    <svg
      width='144'
      height='149'
      viewBox='0 0 144 149'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_d_411_1270)'>
        <path
          d='M70 133C102.396 133 128 105.541 128 72.5C128 39.4591 102.396 12 70 12C37.6042 12 12 39.4591 12 72.5C12 105.541 37.6042 133 70 133Z'
          stroke='white'
          strokeWidth='16'
        />
        <path
          d='M57.7594 51.1306L95.4479 73.978L57.7594 96.8254L57.7594 51.1306Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_411_1270'
          x='0'
          y='0'
          width='144'
          height='149'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='2' dy='2' />
          <feGaussianBlur stdDeviation='3' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.423529 0 0 0 0 0.8 0 0 0 0 0.894118 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_411_1270'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_411_1270'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default VideoSection;
