import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
  name: 'Bayu Cucan',
}
const initialStateRegister = {
  form: {
    name: '',
    email: '', 
    password: '',
  },
  title: 'Register',
}
const initialStateLogin = {
  info: 'Masukan Username dan Password',
  isLogin: false,
  // id: '',
  // token: '',
  // refreshToken: '',
  // expire: ''
  form: {
    email: '', 
    password: '',
  },
}

const RegisterReducer = (state = initialStateRegister, action) => {
  switch (action.type) {
    case 'SET_TITLE': return {
      ...state,
      title: 'Register ganti title'
    } ;
    case 'SET_FORM': return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue
      }
    };
    case 'REGISTER': return {
      ...state,
      form: [
        ...state.form,
        action.payload
      ]
    };
    default:  return state;
  }
}
const LoginReducer = (state = initialStateLogin, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        ...action.payload,
        isLogin: true
        }  
    default:
    return state
  }
}
const reducer = combineReducers({
  RegisterReducer,
  LoginReducer
})


export default reducer;