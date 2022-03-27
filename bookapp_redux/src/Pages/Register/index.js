import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Input} from '../../Components';
import { useSelector } from 'react-redux';

const Register = () => {
  const RegisterReducer = useSelector(state => state.RegisterReducer);
  const [form, setForm] = useState({
    name: '',
    email: '', 
    password: '',
  });

  const sendData = () => {
    console.log('data yang dikirim: ', form);
  };

  // Apabila input sedang berubah maka terima value dari form
  const onInputChange = (value, input) => {
    // Rubah form yang lama
    setForm({
      // Ambil form yang lama, Jika tidak maka properti sebelumnya akan di remove
      ...form,
      // dengan value yang baru
      [input]: value,
    });
  };

  useEffect(() => {
    console.log('global: ', RegisterReducer);
  }, [])

  return (
    <View>
      <Text>{RegisterReducer.title}</Text>
      <Input
        placeholder="Full Name"
        value={form.fullName}
        onChangeText={value => onInputChange(value, 'name')}
      />
      <Input
        placeholder="Email"
        value={form.email}
        onChangeText={value => onInputChange(value, 'email')}
      />
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
