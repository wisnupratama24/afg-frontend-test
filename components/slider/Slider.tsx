import Link from "next/link";
import React, { MouseEventHandler, useState } from "react";
import ImageSlider from "~/assets/png/slider-image.png";
import ImageSlider2 from "~/assets/png/slider-image-2.png";

import { Logo } from "..";
import styles from "./Slider.module.scss";

const sliderData = [
  {
    title: "JOY WEEKS - 24 Jan 2022",
    date: "Jan 24, 2022",
    desc: "Time really flies, we're now in the final week of January 2022",
    image: ImageSlider,
  },
  {
    title: "Beware of imitation!",
    date: "Jan 24, 2022",
    desc: "Watch out for impostors trying to impersonate Joy Games",
    image: ImageSlider2,
  },
];

function Slider() {
  const [slides, setSlides] = useState(sliderData);
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = async () => {
    const index = current === length - 1 ? 0 : current + 1;
    const newSlides = getNewSlides(index);
    setCurrent(index);
    setSlides(newSlides);
  };

  const prevSlide = () => {
    const index = current === 0 ? length - 1 : current - 1;
    const newSlides = getNewSlides(index);
    setCurrent(index);
    setSlides(newSlides);
  };

  const getNewSlides = (index: number) => {
    const activeSlide = sliderData[index];
    const filterSlides = sliderData.filter((e, i) => i !== index);
    const newSlides = [activeSlide, ...filterSlides];
    return newSlides;
  };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return (
    <div className={styles.wrapSlider}>
      {slides.map((row, index) => {
        return (
          <SliderContent
            key={index}
            image={row.image}
            title={row.title}
            date={row.date}
            desc={row.desc}
          />
        );
      })}
      <ArrowLeft onClick={prevSlide} />
      <ArrowRight onClick={nextSlide} />
    </div>
  );
}

interface SliderContentInterface {
  image: StaticImageData;
  title: String;
  date: String;
  desc: String;
}

const SliderContent = ({
  image,
  title,
  date,
  desc,
}: SliderContentInterface) => {
  return (
    <div
      className={styles.slider}
      style={{
        backgroundImage: `url("${image.src}")`,
      }}>
      <div className={styles.overlaySlider}>
        <div className={styles.wrap}>
          <p className={styles.titleSlider}>{title}</p>
          <p>{date}</p>
          <p>{desc}</p>
          <Link href='/read-more'>
            <p className={styles.readMoreSlider}>Read More</p>
          </Link>
        </div>

        <div className={styles.logoOverlay}>
          <Logo />
        </div>
      </div>
    </div>
  );
};

interface ArrowInterface {
  onClick: MouseEventHandler<HTMLDivElement>;
}
const ArrowLeft = ({ onClick }: ArrowInterface) => {
  return (
    <div className={styles.arrowLeft} onClick={onClick}>
      <svg viewBox='0 0 20 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M18.2708 1.27973C19.3915 2.40047 19.3915 4.21089 18.2708 5.33163L7.12084 16.4816L18.2708 27.6315C19.3915 28.7522 19.3915 30.5626 18.2708 31.6834C17.15 32.8041 15.3396 32.8041 14.2189 31.6834L1.02862 18.4931C-0.092123 17.3724 -0.092123 15.562 1.02862 14.4412L14.2189 1.25099C15.3109 0.158989 17.15 0.15899 18.2708 1.27973Z'
          fill='white'
        />
      </svg>
    </div>
  );
};

const ArrowRight = ({ onClick }: ArrowInterface) => {
  return (
    <div className={styles.arrowRight} onClick={onClick}>
      <svg viewBox='0 0 20 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1.69407 1.27973C0.573331 2.40047 0.573331 4.21089 1.69407 5.33163L12.844 16.4816L1.69407 27.6315C0.573331 28.7522 0.573331 30.5626 1.69407 31.6834C2.81481 32.8041 4.62524 32.8041 5.74598 31.6834L18.9362 18.4931C20.057 17.3724 20.057 15.562 18.9362 14.4412L5.74598 1.25099C4.65397 0.158989 2.81481 0.15899 1.69407 1.27973Z'
          fill='white'
        />
      </svg>
    </div>
  );
};

export default Slider;
