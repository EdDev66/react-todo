import { useReducer } from 'react';
import AuthReducer from './authReducer';
import AuthContext from './authContext';
import { auth, database } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import {
  LOGIN,
  REGISTER,
  LOGOUT,
  ADD_USER
} from '../types';

const AuthState = props => {
  const initialState = {
    user: null,
    username: null,
    loading: true,
    isAuthenticated: false,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // LOGIN
  const login = (user) => {
    signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // User signed in successfully
      // console.log(userCredential)
     
      dispatch({ type: LOGIN, payload: userCredential.user })
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
        updateProfile(userCredential.user, {
          displayName: user.username
        })
        addUser(userCredential.user)
        console.log(userCredential)
        dispatch({ type: REGISTER, payload: {uid: userCredential.user.uid, displayName: user.username} })
      })
      console.log('User created!')
    } catch (error) {
      console.log(error);
    }
  }

  // LOGOUT

  // ADD USER
  const addUser = (user) => {
    try {
      set(ref(database, 'users/' + user.uid), {
        email: user.email
      })
      console.log('User added!')
    } catch(err) {
      console.log(err.message)
    }
  }

  return <AuthContext.Provider
  value={{
    user: state.user,
    username: state.username,
    isAuthenticated: state.isAuthenticated,
    login,
    register,
  }}
  >
    {props.children}
  </AuthContext.Provider>
}

export default AuthState