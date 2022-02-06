import React from "react";
import styles from "./Login.module.scss";

import IlustrationLogin from "~/assets/svg/Illustration-login.svg";
import Image from "next/image";
import BoxRightLogin from "./BoxRightLogin";

function Login() {
  return (
    <div className={styles.login}>
      <div className={`${styles.wrapLogin} max-w-4/5 mx-auto`}>
        <div className='md:block hidden'>
          <Image src={IlustrationLogin} alt='Ilustration Login' />
        </div>

        <BoxRightLogin />
      </div>
    </div>
  );
}

export default Login;
