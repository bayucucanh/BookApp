import axios from 'axios'
import {Alert} from 'react-native'

export const setForm = (inputType, value) => {
  return {
    type: 'SET_FORM',
    inputType: inputType,
    inputValue: value,
  };
};

export const register = (data) => ({
  type: 'REGISTER',
  payload: data
})

export const Regis = data => async dispatch => {
  try {
    await axios.post('http://code.aldipee.com/api/v1/auth/register', data)
    .then((response) => {
      console.log(response.data.message);
        if (response.data.success) {
          Alert.alert('Register Success', response.data.message)
        } else if (response.code === 400){
          Alert.alert('Register Failed')
        }
    })
    dispatch(register(data))
  } catch (err) {
    console.log(err);
  }
}
