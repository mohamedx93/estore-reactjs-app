import React, { ReactElement, useContext, useEffect, useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { AuthContext } from 'context';
import { Sign } from 'crypto';


interface Props {

}

export default function Auth({ }: Props): ReactElement {
    const [isSignUpView, setIsSignUpView] = useState(false)
    const { setIsAuthView,setLoading } = useContext(AuthContext);
    useEffect(() => {
        setIsAuthView(true);
    }, [setIsAuthView])
    return (
        isSignUpView ? <SignUp setIsSignUpView={setIsSignUpView} /> : <Login setIsSignUpView={setIsSignUpView} setLoading={setLoading} />
    
    )
}
