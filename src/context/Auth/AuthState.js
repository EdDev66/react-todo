import { useReducer } from 'react';
import AuthReducer from './authReducer';
import AuthContext from './authContext';
import auth from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {
  LOGIN,
  REGISTER,
  LOGOUT
} from '../types';

const AuthState = props => {
  const initialState = {
    user: null,
    loading: true,
    isAuthenticated: false,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // LOGIN
  const login = (user) => {
    signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // User signed in successfully
      dispatch({ type: LOGIN, payload: userCredential.user.email })
    })
    .catch((error) => {
      // Handle errors here
      console.log(error.message)
    });
  }


  // REGISTER
  const register = async (user) => {
    try {
      createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        dispatch({ type: REGISTER, payload: userCredential.user.email })
      })
      console.log('User created!')
    } catch (error) {
      console.log(error);
    }
  }

  // LOGOUT

  return <AuthContext.Provider
  value={{
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    login,
    register,
  }}
  >
    {props.children}
  </AuthContext.Provider>
}

export default AuthState