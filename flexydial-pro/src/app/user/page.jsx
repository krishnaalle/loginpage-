"use client"
import { React, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import {HiEye,HiEyeOff} from "react-icons/hi";
import { IoReloadSharp } from 'react-icons/io5';
import Image from 'next/image';

export default function Login(){

    const [show, setShow] = useState(false);
    const passwordRef = useRef(null);
    

    useEffect(() => {
        function handleClickOutside(event) {
          if (passwordRef.current && !passwordRef.current.contains(event.target)) {
            setShow(false);
          }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
        }, []);
      

    return(
        <>   
            <section className='mx-auto items-center py-20 flex flex-col gap-8'>
                <div className='title flex  flex-col items-center'>
                    <h1 className='text-gray-800 text-4xl font-bold py-2'>
                        <Image 
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src='/assets/flexydial-logo.png'
                        alt='/assets/flexydial-logo'
                        width={180}
                        height={37}/>
                    </h1>
                    <p><strong>Sign In</strong></p>
                    <p>Welcome to Flexydial</p>
                </div>
            <form className='flex flex-col gap-4    '>
                <div>
                    <h1><strong>
                    Flexydial_Agent 
                    </strong></h1>
                </div>
                    <div className={`${styles.input_group}`}>
                        <input 
                        type='email'
                        name='email'
                        placeholder='Enter your agent ID or mail ID here'
                        className={styles.input_text}>
                        </input>
                       
                    </div>
                        <div className={styles.input_group}>
                            <input
                            ref={passwordRef}
                            type={show ? 'text' : 'password'}   
                            name='password'
                            placeholder='Password'
                            className={styles.input_text}>
                            </input>
                            <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
                            {show ? <HiEyeOff size={25} /> : <HiEye size={25} />}

                            </span>
                        </div>
                        <div className='flex justify-end text-sm'>
                                <a href='/forgot' className={styles.forgot_password_link}>
                                <strong>Forgot Password ?</strong>
                                </a>
                            </div>
            <div className={`${styles.captcha_group} gap-3`} >
                <Image
                id='generated_captcha'
                width={100}
                height={37}
                src="/assets/captcha.jpg"
                alt='captcha'
                />
                <span className='icon flex items-center'>
                            <IoReloadSharp size={25}/>
                </span>
                <div className={`${styles.captcha_group}flex flex-col`}>
                    <label>Enter captcha here</label>
                    <input
                        type='text'
                        name='captcha'
                        placeholder='Enter here '
                        className={`${styles.input_group} py-2`}>
                    </input>
                </div>
            </div>
                    {/* login buttons */}
                
                    <div className='flex justify-between items-end py-4'>
                        <p className={`text-sm`}>
                        Please <Link href='/user/admin' className={styles.admin_login_link}>click here</Link> for admin login
                        </p>
                        <button className={`${styles.button}`} type='submit'>
                        Login
                        </button>
                    </div>
            </form>
            </section>
        </>
    )
}