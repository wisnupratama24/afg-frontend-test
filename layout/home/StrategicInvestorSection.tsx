import Image from "next/image";
import React from "react";
import styles from "./Home.module.scss";

const investorList = [
  {
    name: "investor1",
    src: "assets/investor1.png",
  },
  {
    name: "investor2",
    src: "assets/investor2.png",
  },
  {
    name: "investor3",
    src: "assets/investor3.png",
  },
  {
    name: "investor4",
    src: "assets/investor4.png",
  },
  {
    name: "investor5",
    src: "assets/investor5.png",
  },
  {
    name: "investor6",
    src: "assets/investor6.png",
  },
  {
    name: "investor7",
    src: "assets/investor7.png",
  },
  {
    name: "investor8",
    src: "assets/investor8.png",
  },
  {
    name: "investor9",
    src: "assets/investor9.png",
  },
  {
    name: "investor10",
    src: "assets/investor10.png",
  },
  {
    name: "investor11",
    src: "assets/investor11.png",
  },
  {
    name: "investor12",
    src: "assets/investor12.png",
  },
  {
    name: "investor13",
    src: "assets/investor13.png",
  },
  {
    name: "investor14",
    src: "assets/investor14.png",
  },
  {
    name: "investor15",
    src: "assets/investor15.png",
  },
  {
    name: "investor16",
    src: "assets/investor16.png",
  },
];

interface myLoadesProps {
  src: string;
}
const imageLoader = ({ src }: myLoadesProps) => {
  return `${src}`;
};
function StrategicInvestorSection() {
  return (
    <div className={`${styles.strategicInvestor} pt-5 pb-10`}>
      <p className={`${styles.title} text-center pt-14`}>STRATEGIC INVESTORS</p>
      <div className={`w-4/5 mx-auto pt-10 ${styles.wrapStrategicInvestor}`}>
        {investorList.map((row, index) => {
          return (
            <div key={index} className={styles.imageWrapper}>
              <Image
                src={row.src}
                alt={row.name}
                loader={imageLoader}
                layout='fill'
                objectFit='contain'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StrategicInvestorSection;
