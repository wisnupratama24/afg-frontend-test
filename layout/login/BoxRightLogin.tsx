import Link from "next/link";
import React from "react";
import styles from "./Login.module.scss";

function BoxRightLogin() {
  return (
    <div className={styles.boxRightLogin}>
      <div className={styles.wrapBoxRightLogin}>
        <p>Welcome to</p>
        <p>Joy Games</p>

        <div>
          <div className={styles.buttonLogin}>
            <Link href={"/login"}>
              <div className='flex items-center gap-4'>
                <GoogleIcon />
                Login with Google
              </div>
            </Link>
          </div>

          <div className={styles.buttonLogin}>
            <Link href={"/login"}>
              <div className='flex items-center gap-4'>
                <FacebookIcon />
                Login with Facebook
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.dividerLogin}>
          <div className={styles.overlayOr}> OR </div>
        </div>

        <div className={styles.formLogin}>
          <form action=''>
            <DefaultInput
              id='email'
              icon={<MessageIcon />}
              type='email'
              defaultValue='example@gmail.com'
              placeholder='Example@gmail.com'
              label={"Email"}
            />
            <DefaultInput
              id='password'
              icon={<KeyIcon />}
              type='password'
              defaultValue=''
              placeholder='******'
              label={"Password"}
            />
          </form>
        </div>

        <div className='flex justify-between'>
          <div className='flex items-center gap-1'>
            <input
              type={"checkbox"}
              name='remember-me'
              id='remember-me'
              className='bg-gray-400 text-gray-500'
            />

            <label
              htmlFor='remember-me'
              className='text-xs'
              style={{
                color: "#2F2F2F",
              }}>
              Remember Me
            </label>
          </div>

          <p
            style={{
              color: "#6358DC",
              fontSize: "12px",
              fontWeight: "400",
            }}>
            Forgot Password?
          </p>
        </div>

        <div className='pt-6 pb-6'>
          <button
            type='submit'
            className='text-sm py-4 w-full text-white rounded-lg'
            style={{
              background: "#6358DC",
            }}>
            Login
          </button>

          <div className='mt-5 text-sm text-center flex justify-center gap-1'>
            Don't have an account?{" "}
            <Link href='/register'>
              <div
                style={{
                  color: "#6358DC",
                }}>
                Register
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

interface DefaultInputProps {
  icon: JSX.Element;
  id: string;
  type?: string;
  label: String;
  defaultValue: string;
  placeholder: string;
}

const DefaultInput = ({
  icon,
  id,
  type = "text",
  label,
  defaultValue,
  placeholder,
}: DefaultInputProps) => {
  return (
    <div className={styles.formGroupLogin}>
      <div className={styles.formControlIcon}>{icon}</div>
      <div className={styles.formGroup}>
        <label htmlFor={id} className={styles.formControlLabel}>
          {label}
        </label>
        <input
          type={type}
          className={styles.formControl}
          defaultValue={defaultValue}
          id={id}
          name={id}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

const KeyIcon = () => {
  return (
    <svg
      width='22'
      height='22'
      viewBox='0 0 27 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.3749 21.3749V22.4998C12.3749 22.7982 12.2564 23.0844 12.0454 23.2953C11.8344 23.5063 11.5483 23.6248 11.2499 23.6248H8.99994V24.7498C8.99994 25.3466 8.76289 25.9189 8.34093 26.3408C7.91898 26.7628 7.34669 26.9998 6.74995 26.9998H2.24998C1.65325 26.9998 1.08096 26.7628 0.659005 26.3408C0.237051 25.9189 0 25.3466 0 24.7498V21.8406C0.000127433 21.2439 0.237262 20.6717 0.659245 20.2499L9.36669 11.5424C8.83278 9.72947 8.88315 7.79444 9.51066 6.01172C10.1382 4.229 11.311 2.68906 12.8628 1.61026C14.4146 0.531463 16.2666 -0.0314448 18.1562 0.00135624C20.0459 0.0341573 21.8773 0.661002 23.3907 1.79301C24.9041 2.92501 26.0227 4.50472 26.588 6.30815C27.1533 8.11158 27.1364 10.0472 26.5399 11.8405C25.9434 13.6339 24.7975 15.1939 23.2647 16.2994C21.7318 17.405 19.8898 17.9999 17.9999 17.9999H15.7476V20.2499C15.7476 20.5482 15.6291 20.8344 15.4181 21.0454C15.2072 21.2563 14.921 21.3749 14.6226 21.3749H12.3727H12.3749ZM20.2499 8.99994C20.8466 8.99994 21.4189 8.76289 21.8408 8.34093C22.2628 7.91898 22.4998 7.34669 22.4998 6.74995C22.4998 6.15322 22.2628 5.58093 21.8408 5.15898C21.4189 4.73702 20.8466 4.49997 20.2499 4.49997C19.6531 4.49997 19.0808 4.73702 18.6589 5.15898C18.2369 5.58093 17.9999 6.15322 17.9999 6.74995C17.9999 7.34669 18.2369 7.91898 18.6589 8.34093C19.0808 8.76289 19.6531 8.99994 20.2499 8.99994Z'
        fill='black'
      />
    </svg>
  );
};

const GoogleIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_411_98)'>
        <path
          d='M7.09188 19.3379L5.978 23.4962L1.90681 23.5823C0.690125 21.3256 0 18.7437 0 15.9999C0 13.3468 0.64525 10.8448 1.789 8.64169H1.78988L5.41437 9.30619L7.00212 12.9089C6.66981 13.8778 6.48869 14.9178 6.48869 15.9999C6.48881 17.1744 6.70156 18.2998 7.09188 19.3379Z'
          fill='#FBBB00'
        />
        <path
          d='M31.7207 13.011C31.9045 13.9789 32.0003 14.9784 32.0003 16C32.0003 17.1455 31.8799 18.2629 31.6504 19.3407C30.8716 23.0084 28.8364 26.211 26.0171 28.4774L26.0162 28.4765L21.4509 28.2436L20.8048 24.2101C22.6756 23.113 24.1376 21.396 24.9077 19.3407H16.3521V13.011H25.0325H31.7207Z'
          fill='#518EF8'
        />
        <path
          d='M26.0157 28.4764L26.0166 28.4773C23.2747 30.6812 19.7915 31.9999 15.9999 31.9999C9.90674 31.9999 4.60918 28.5942 1.90674 23.5824L7.0918 19.338C8.44299 22.9441 11.9217 25.5112 15.9999 25.5112C17.7529 25.5112 19.3951 25.0373 20.8043 24.21L26.0157 28.4764Z'
          fill='#28B446'
        />
        <path
          d='M26.2128 3.6835L21.0295 7.927C19.5711 7.01538 17.8471 6.48875 16.0001 6.48875C11.8295 6.48875 8.28575 9.17356 7.00225 12.909L1.78994 8.64175H1.78906C4.45194 3.50769 9.81631 0 16.0001 0C19.8823 0 23.4418 1.38287 26.2128 3.6835Z'
          fill='#F14336'
        />
      </g>
      <defs>
        <clipPath id='clip0_411_98'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

const FacebookIcon = () => {
  return (
    <svg
      width='14'
      height='24'
      viewBox='0 0 16 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M13.0789 5.31333H16V0.225333C15.496 0.156 13.7629 0 11.7444 0C2.50246 0 5.01692 10.4667 4.64895 12H0V17.688H4.64761V32H10.3458V17.6893H14.8054L15.5134 12.0013H10.3445C10.5951 8.236 9.32989 5.31333 13.0789 5.31333Z'
        fill='#3B5999'
      />
    </svg>
  );
};

const MessageIcon = () => {
  return (
    <svg
      width='24'
      height='18'
      viewBox='0 0 30 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M27 0H3C1.35 0 0.015 1.35 0.015 3L0 21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM27 6L15 13.5L3 6V3L15 10.5L27 3V6Z'
        fill='black'
      />
    </svg>
  );
};

export default BoxRightLogin;
