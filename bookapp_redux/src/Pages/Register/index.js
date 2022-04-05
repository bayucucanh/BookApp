import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Input} from '../../Components';
import {useDispatch, useSelector} from 'react-redux';
import {setForm, Regis} from '../../redux';
import styles from '../Login/styles';
import {bgImageLogin} from '../../Assets';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const {form} = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();

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
    navigation.navigate('RegisterSuccess')
  };

  // Apabila input sedang berubah maka terima value dari form
  // const onInputChange = (value, inputType) => {
  //   dispatch(setForm(inputType, value));
  // };

  return (
    <View style={styles.container}>
      <Image source={bgImageLogin} style={styles.imgBg} />
      <View style={styles.listInput}>
        <Text style={styles.title}>Create your account</Text>
        <Input
          placeholder="Full Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>
      <View style={{padding: 22, marginTop: -30}}>
        <Button title="Register" color="#fd9210" onPress={sendData} />
        <Text
          style={{color: '#ffffff', textAlign: 'center', marginVertical: 17}}>
          Dont have an account ?
        </Text>
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* <Button title="Register" onPress={sendData} /> */}
    </View>
  );
};

export default Register;

// const styles = StyleSheet.create({});
