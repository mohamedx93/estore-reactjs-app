import React, { useState, ReactElement } from 'react'
import { Input, Logo, Button } from '@components/ui';
import styles from '@styles/Auth.module.scss'


interface Props {
    setIsSignUpView: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignUp({ setIsSignUpView }: Props): ReactElement {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setUserName] = useState('')

    const handleLogin = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        console.log('handle login');
    }

    function setModalView(msg: string): void {
        alert(msg);
    }


    return (
        <form
            onSubmit={handleLogin}
            className={styles.formContainer}
        >
            <div className={styles.logoBox} >
                <Logo width='64px' height='64px' />
            </div>
            <div className={styles.formBody}>
                {message && (
                    <div className="text-red border border-red p-3">
                        {message}. Did you {` `}
                        <a
                            className="text-accent-9 inline font-bold hover:underline cursor-pointer"
                            onClick={() => setModalView('FORGOT_VIEW')}
                        >
                            forgot your password?
                        </a>
                    </div>
                )}
                <Input type="text"
                    placeholder="&#xf0e0;   User Name"
                    onChange={setUserName}
                    autoCapitalize='none'
                    autoCorrect='off'
                    autoComplete='off'
                    autoFocus
                />
                <Input type="email"
                    placeholder="&#xf0e0;   Email"
                    onChange={setEmail}
                    autoCapitalize='none'
                    autoCorrect='off'
                    autoComplete='off'
                />
                <Input type="password" placeholder="&#xf023;    Password" onChange={setPassword} />
                <Input type="password" placeholder="&#xf023;    Confirm Password" onChange={setConfirmPassword} />


                <Button className={styles.submitButton} type="submit">
                    Sign Up
                </Button>
                <div className={styles.link}>
                    {`Already have an account? `}
                    <a                    
                        role='button'
                        onClick={() => setIsSignUpView(false)}
                    >
                        Log In
                    </a>
                </div>
            </div>
        </form>

    )
}
