import React from "react";
import { Slider, LinkItem } from "~/components";
import styles from "./Home.module.scss";

function NewsSection() {
  return (
    <div className={styles.news}>
      <p className={`${styles.title} text-center pt-14`}>News</p>
      <p className={`${styles.desc} md:pt-5 pt-2 md:w-full w-4/5`}>
        Eclipse to the world of the end of our story Inside
      </p>
      <Slider />

      <div className='pt-5 pb-4'>
        <LinkItem
          name='VIEW ALL'
          url='/view-all'
          style={{
            width: "200px",
            fontSize: "14px",
            display: "flex",
            justifyContent: "center",
            margin: "3rem auto",
          }}
        />
      </div>
    </div>
  );
}

export default NewsSection;
