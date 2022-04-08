import axios from 'axios';
import {Alert} from 'react-native';
import { REGISTER } from 'redux-persist';
import { GET_BOOK_POPULAR, GET_DATA, GET_DETAIL, LOADING, LOGIN, REFRESH, REGISTER_SUCCESS } from './types';

export const setForm = (inputType, value) => {
  return {
    type: 'SET_FORM',
    inputType: inputType,
    inputValue: value,
  };
};

export const register = data => ({
  type: REGISTER,
  payload: data,
});

export const login = (data) => ({
  type: LOGIN,
  payload: data,
});

export const getBooks = data => ({
  type: GET_DATA,
  payload: data,
});

export const getDetail = data => ({
  type: GET_DETAIL,
  payload: data
})

export const getPopularBooks = data => ({
  type: GET_BOOK_POPULAR,
  payload: data
})

export const registerSuccess = val => ({
  type: REGISTER_SUCCESS,
  payload: val
})

export const loading = val => ({
  type: LOADING,
  payload: val
})

export const refresh = val => ({
  type: REFRESH,
  payload: val
})

export const Regis = (data) => async dispatch => {
  dispatch(loading(true))
  try {
    await axios
      .post('http://code.aldipee.com/api/v1/auth/register', data)
      .then(response => {
        console.log(response.data.message);
        dispatch(loading(false))
        dispatch(register(data));
      });
    
  } catch (err) {
    dispatch(registerSuccess(false))
    dispatch(loading(false))
    console.log(err);
  }
};

export const LoggedIn = data => async dispatch => {
  dispatch(loading(true))
  try {
    await axios
      .post('http://code.aldipee.com/api/v1/auth/login', data)
      .then(response => {
        dispatch(login(response.data));
        dispatch(loading(false))
      });
  } catch (err) {
    Alert.alert('Login Failed', 'Incorrect email or password')
    dispatch(loading(false))
    console.log(err);
  }
};

export const getDataBooks = token => {
  return async dispatch => {
    dispatch(loading(true));
    try {
      await axios
        .get('http://code.aldipee.com/api/v1/books', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .then(response => {
          console.log(response);
          dispatch(loading(false));
          dispatch(refresh(false));
          dispatch(getBooks(response.data.results));
        });
    } catch (error) {
      dispatch(loading(false));
      console.log(error);
    }
  };
};

export const getDetailBooks = (id, token) => {
  return async dispatch => {
    dispatch(loading(true));
    try {
      await axios
      .get(`http://code.aldipee.com/api/v1/books/${id}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(response => {
        console.log(response.data);
        dispatch(getDetail(response.data))
        dispatch(loading(false));
        dispatch(refresh(false));
      });
    } catch (error) {
      console.log(error);
      dispatch(loading(false));
    }
    
  };
};