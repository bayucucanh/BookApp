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
  isLogin: true,
}

const RegisterReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_TITLE') {
    return  {
      ...state,
      title: 'Register ganti title'
    }
  }
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue
      }
    }
  }
  return state;
}
const LoginReducer = (state = initialStateLogin, action) => {
  return state;
}
const reducer = combineReducers({
  RegisterReducer,
  LoginReducer
})


export default reducer;