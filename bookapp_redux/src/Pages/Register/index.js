import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Input} from '../../Components';
import { useDispatch, useSelector } from 'react-redux';
import { setForm } from '../../redux';

const Register = () => {
  const {form} = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();
  // const [form, setForm] = useState({
  //   name: '',
  //   email: '', 
  //   password: '',
  // });

  const sendData = () => {
    console.log('form: ', form);
    
  };

  // Apabila input sedang berubah maka terima value dari form
  const onInputChange = (value, inputType) => {
    // Rubah form yang lama
    // setForm({
    //   // Ambil form yang lama, Jika tidak maka properti sebelumnya akan di remove
    //   ...form,
    //   // dengan value yang baru
    //   [input]: value,
    // });
    dispatch(setForm(inputType, value))
  };

  return (
    <View>
      <Text>{form.name}</Text>
      <Input
        placeholder="Full Name"
        value={form.name}
        onChangeText={value => onInputChange(value, 'name')}
      />
      <Text>{form.email}</Text>
      <Input
        placeholder="Email"
        value={form.email}
        onChangeText={value => onInputChange(value, 'email')}
      />
      <Text>{form.password}</Text>
      <Input
        placeholder="Password"
        value={form.password}
        onChangeText={value => onInputChange(value, 'password')}
        secureTextEntry
      />
      <Button title="Register" onPress={sendData} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
