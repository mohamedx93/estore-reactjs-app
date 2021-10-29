import React, { useState, ReactElement, useCallback, useEffect } from 'react'
import { Input, Logo, Button } from '@components/ui';
import styles from '@styles/Auth.module.scss'
import { validate } from 'email-validator'


interface Props {
    setIsSignUpView: React.Dispatch<React.SetStateAction<boolean>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Login({ setIsSignUpView, setLoading }: Props): ReactElement {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [dirty, setDirty] = useState(false)
    const [disabled, setDisabled] = useState(false)

    function setModalView(msg: string): void {
        alert(msg);
    }

    const handleLogin =  (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()

        if (!dirty && !disabled) {
            setDirty(true)
            handleValidation()
        }

        try {
            setLoading(true)
            setMessage('')
            // await login({
            //     email,
            //     password,
            // })
            setTimeout(() => {
                setLoading(false)
                console.log('finished')
            }, 3000
            )
        } catch (error:any) {
            setMessage(error.message)
            setLoading(false)
            setDisabled(false)
        }
    }


    const handleValidation = useCallback(() => {
        // Test for Alphanumeric password
        const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

        // Unable to send form unless fields are valid.
        if (dirty) {
            setDisabled(!validate(email) || password.length < 7 || !validPassword)
        }
    }, [email, password, dirty])

    useEffect(() => {
        handleValidation()
    }, [handleValidation])



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
                <Input type="email"
                    placeholder="&#xf0e0;   Email"
                    onChange={setEmail}
                    autoCapitalize='none'
                    autoCorrect='off'
                    autoComplete='on'
                    autoFocus
                />
                <Input type="password" placeholder="&#xf023;    Password" onChange={setPassword} />


                <Button className={styles.submitButton} type="submit">
                    Log In
                </Button>
                <div className={styles.link}>
                    {`Don't have an account? `}
                    <a
                        role='button'
                        onClick={() => setIsSignUpView(true)}
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </form>

    )
}
