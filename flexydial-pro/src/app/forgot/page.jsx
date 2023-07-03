"use client"
import { useRouter } from 'next/navigation'
import React from 'react';
import styles from '../styles/Form.module.css';
import { HiAtSymbol } from 'react-icons/hi';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();

  const handleGoBack = () => {
    if (router.asPath === '/user/admin') {
      router.back();
    } else {
      router.push('/user');
    }
  };
  return (
    <>
      <section className="mx-auto items-center py-20 flex flex-col gap-8">  
        <div className="title flex  flex-col items-center">
          <h1 className="text-gray-800 text-4xl font-bold py-2">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/assets/flexydial-logo.png"
              alt="/assets/flexydial-logo"
              width={180}
              height={37}
            />
          </h1>
          <p>
            <strong>Sign In</strong>
          </p>
          <p>Welcome to Flexydial</p>
        </div>
        <form className="flex flex-col gap-4    ">
          <div>
            <h1>
              <strong>Forgot Password</strong>
            </h1>
          </div>
          <div className={`${styles.input_group}`}>
            <input
              type="email"
              name="email"
              placeholder="Enter your user ID or email ID here"
              className={styles.input_text}
            ></input>
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className="flex flex-col pt-3">
            <button
              className={`${styles.reset_button}`}
              type="submit"
            >
              Reset Password
            </button>
            <p className="text-sm mt-5 flex justify-end">
              Back to{' '}
              <a  onClick={handleGoBack} className={`${styles.admin_login_link} items-end`}>
                Sign In
              </a>{' '}
              page
            </p>
          </div>
        </form>
      </section>
    </>
  );
}
