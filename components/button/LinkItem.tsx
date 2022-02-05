import Link from "next/link";
import React from "react";
import styles from "./Button.module.scss";

interface LinkItemInterface {
  name: String;
  url: string;
  style?: React.CSSProperties;
}

const LinkItem = (props: LinkItemInterface) => {
  const { name, url, style } = props;
  return (
    <Link href={url}>
      <div className={styles.linkItem} style={style}>
        {name}
      </div>
    </Link>
  );
};
export default LinkItem;
