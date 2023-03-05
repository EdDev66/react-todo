import React from 'react';
import {
  LOGIN,
  REGISTER,
  LOGOUT
} from '../types';
import AuthState from './AuthState';

const authReducer = (state = AuthState, action) => {
  switch(action.type) {
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        user: action.payload.uid,
        username: action.payload.displayName,
        isAuthenticated: true
      }
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false
      }
    default:
      return state;
  }
}

export default authReducer