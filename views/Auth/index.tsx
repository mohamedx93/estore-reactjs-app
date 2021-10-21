import React, { useState, ReactElement } from 'react'
import { Input, Logo, Button } from '@components/ui';
import styles from '@styles/Auth.module.scss'


interface Props {

}

export default function Auth({ }: Props): ReactElement {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleLogin = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        console.log('handle login');
    }

    const setModalView = (msg: string) => {
        alert(msg);
    }

    return (<>
        <form
            onSubmit={handleLogin}
            className={styles.formContainer}
        >
            <div className={styles.logoBox} >
                <Logo height='100%' width='100%' />
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
                <Input type="email"
                    placeholder="Email"
                    onChange={setEmail}
                    autoCapitalize='off'
                    autoCorrect='off'
                    autoComplete='on'
                    autoFocus
                    className={styles.authInput}/>
                <Input type="password" placeholder="Password" onChange={setPassword} className={styles.authInput} />


                <Button
                    className={styles.submitButton}
                // variant="slim"
                // type="submit"
                // loading={loading}
                // disabled={disabled}
                >
                    Log In
                </Button>
                <div className="pt-1 text-center text-sm">
                    <span className="text-accent-7">Don&apos;t have an account?</span>
                    {` `}
                    <a
                        className="text-accent-9 font-bold hover:underline cursor-pointer"
                        onClick={() => setModalView('SIGNUP_VIEW')}
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </form>
     
    </>
    )
}
