import React, {useEffect, useState} from 'react';
import {View, Button, TouchableOpacity, Text, StyleSheet, Image, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Input} from '../../Components';
import {LoggedIn} from '../../redux';
import {useDispatch, useSelector} from 'react-redux';
import {PRIMARY_COLOR} from '../../utils/constant';
import {LoginDraw} from '../../Assets';
import {bgImageLogin} from '../../Assets';
import styles from './styles';
import { getDataBooks } from '../../redux';

const Login = () => {
  const navigation = useNavigation();
  const isLogin  = useSelector(state => {
    console.log('User Login: ', state.appData.isLogin)
    return state.appData.isLogin;
  });
  // remove these initial assignments after testing
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const sendData = () => {
    const data = {
      email: email,
      password: password,
    };
    console.log('form: ', data);
    dispatch(LoggedIn(data));
    if (isLogin === true) {
      navigation.replace('Home')
    } else {
      Alert.alert('Login Failed', 'Incorrect email or password')
    }
  };


  return (
    <View style={styles.container}>
      {/* <LoginDraw style={styles.draw} width={250} height={250}/> */}
      <Image source={bgImageLogin} style={styles.imgBg} />

      <View style={styles.listInput}>
        <Text style={styles.title}>Login to your account</Text>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={{padding: 22, marginTop: -30}}>
        <Button title="Login" color="#fd9210" onPress={sendData} />
        <Text style={{color: '#ffffff', textAlign: 'center', marginVertical: 17}}>
          Dont have an account ?
        </Text>
        <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

