import React, { Component } from 'react'
import InputField from '@'
export class Form extends Component {
  render() {
    const { user_type } = this.props;

    return (
        <form className='flex flex-col gap-4    '>
                <div>
                    <h1><strong>
                    {user_type} 
                    </strong></h1>
                </div>
                    <div className={`${styles.input_group}`}>
                        <InputField 
                        type='email'
                        name='email'
                        Placeholder='Enter your agent ID or mail ID here'
                        className={styles.input_text} />
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
                        className={`${styles.input_group} py-2`}
                        >
                    </input>
                </div>
            </div>
                    {/* login buttons */}
                
                    <div className='flex justify-between items-end py-4'>
                        <p className={`text-sm`}>
                            Please{' '}
                            <Link href='/user/admin' passHref>
                            <span className={`${styles.admin_login_link} ${styles.link}`}>
                                click here
                            </span>
                            </Link>{' '}
                            for admin login
                        </p>
                        <button className={`${styles.button}`} type='submit'>
                            Login
                    </button>
</div>
            </form>
    )
  }
}

export default Form