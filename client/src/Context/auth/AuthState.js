import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import axios from 'axios'
import setAuthToken from '../utils/setAuthToekn'

import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  CLEAR_ERROR,
  LOAD_USER,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../types'


const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);


  
const loadUser = async () => {
      if(localStorage.token) {
        setAuthToken(localStorage.token)
      }
       
       try {
         const res = await axios.get('/auth/');
         dispatch({
           type : LOAD_USER,
           payload : res.data
         })
       } catch (err) {
          dispatch({
            type : AUTH_ERROR
          })
       }
  }


  //REGISTER_USER
  const register = async (formData) => {
       const config = {
         headers: {
           'Content-Type':'application/json'
           
         }
       }
       try {
        const res = await axios.post('/register/', formData , config);

        dispatch({
          type: REGISTER_SUCCESS,
          payload : res.data
        })
        loadUser()
      } catch (err) { 
        const response = err.response 
        console.log(response)
        console.log(response.config.data)
        dispatch({
          type: REGISTER_FAIL,
          payload: response.data.msg
        })
       }
  }


  //login User
  //post request
  const login = async (formData) => {
    const config = {
      headers : {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/auth/' , formData , config);

      dispatch({
        type : LOGIN_SUCCESS,
        payload : res.data
      })

      loadUser();
    } catch (err) {
      const response = err.response
      console.log(response)
      dispatch({
        type : LOGIN_FAIL,
        payload : response.data.msg
      })
    }
  }

  //LOGOUT
  const logout = () => {
     dispatch({
       type : LOGOUT
     })
  }

  const clearError = () => {
        dispatch({
          type :CLEAR_ERROR
        })
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        loading: state.loading,
        register,
        clearError,
        loadUser,
        login,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
