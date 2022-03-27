import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
  name: 'Bayu Cucan',
}
const initialStateRegister = {
  title: 'Register',
}
const initialStateLogin = {
  info: 'Masukan Username dan Password',
  isLogin: true,
}

const RegisterReducer = (state = initialStateRegister, action) => {
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