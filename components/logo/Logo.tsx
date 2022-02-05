import Image from "next/image";
import React from "react";
import LogoIcon from "~/assets/svg/logo.svg";
import styles from "./Logo.module.scss";

function Logo() {
  return (
    <div className={styles.logo}>
      <Image src={LogoIcon} alt='Logo Icon' />
    </div>
  );
}

export default Logo;
