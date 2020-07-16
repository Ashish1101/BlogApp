import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    CLEAR_ERROR,
    AUTH_ERROR,
    LOAD_USER,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
  } from '../types'
  
  
  export default (state , action) => {
         switch (action.type)  {
               case LOAD_USER: 
                   return {
                       ...state,
                       isAuthenticated: true,
                       user : action.payload,
                       loading: false
                   }
               case REGISTER_SUCCESS:
               case LOGIN_SUCCESS:
                   localStorage.setItem('token', action.payload.token);
                   return {
                       ...state,
                       ...action.payload,
                       isAuthenticated: true,
                       loading : false
                   }
               case REGISTER_FAIL:
                   case AUTH_ERROR:
                   case LOGIN_FAIL:
                   case LOGOUT:
                   localStorage.removeItem('token');
                   return {
                       ...state,
                       isAuthenticated: false,
                       loading: true,
                       user: null,
                       toekn: null,
                       error: action.payload
                   }
              case CLEAR_ERROR:
                  return {
                      ...state,
                      error: null
                  }
              default :
                 return;
         }
  }