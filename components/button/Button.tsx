import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: String;
}
function Button({ label, ...others }: ButtonProps) {
  return (
    <div>
      <button {...others} className={styles.btn}>
        {label}
      </button>
    </div>
  );
}

export default Button;
