import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Input} from '../../Components';
import {useDispatch, useSelector} from 'react-redux';
import {setForm, Regis} from '../../redux';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {form} = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();
  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // });

  const sendData = () => {
    const data = {
      email: email,
      password: password,
      name: name,
    };
    console.log('form: ', data);
    dispatch(Regis(data));
    setName('');
    setEmail('');
    setPassword('');
  };

  // Apabila input sedang berubah maka terima value dari form
  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };

  return (
    <View>
      <Text>Full Name</Text>
      <Input
        placeholder="Full Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text>Email</Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text>Password</Text>
      <Input
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title="Register" onPress={sendData} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
