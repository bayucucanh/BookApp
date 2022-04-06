import axios from 'axios';
import {Alert} from 'react-native';

export const setForm = (inputType, value) => {
  return {
    type: 'SET_FORM',
    inputType: inputType,
    inputValue: value,
  };
};

export const register = data => ({
  type: 'REGISTER',
  payload: data,
});

export const login = (data) => ({
  type: 'LOGIN',
  payload: data,
});

export const getBooks = data => ({
  type: 'GET_BOOKS',
  payload: data,
});

export const Regis = data => async dispatch => {
  try {
    await axios
      .post('http://code.aldipee.com/api/v1/auth/register', data)
      .then(response => {
        console.log(response.data.message);
        if (response.data.success) {
          Alert.alert('Register Success', response.data.message);
        }
      });
    dispatch(register(data));
  } catch (err) {
    Alert.alert('Register Failed');
    console.log(err);
  }
};

export const LoggedIn = data => async dispatch => {
  try {
    await axios
      .post('http://code.aldipee.com/api/v1/auth/login', data)
      .then(response => {
        Alert.alert('Login Success');
        console.log(response.data);
        dispatch(login(response.data));
      });
  } catch (err) {
    Alert.alert('Login Failed');
    console.log(err);
  }
};

export const getDataBooks = token => {
  return async dispatch => {
    await axios
      .get('http://code.aldipee.com/api/v1/books', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(response => {
        console.log(response);
        dispatch(getBooks(response.data.results))
      });
  };
};