import API from './init_axios';
import { ISignIn, ISignUp } from '@constants/Interfaces'

export const signIn = (authData: ISignIn) => API.post('/user/signin', authData);
export const signUp = (authData: ISignUp) => API.post('/user/signup', authData);
