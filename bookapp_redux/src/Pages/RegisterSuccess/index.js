import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import {PRIMARY_COLOR, PRIMARY_TEXT} from '../../utils/constant';
import LottieView from 'lottie-react-native';
import {successAn} from '../../Assets';
import {useNavigation} from '@react-navigation/native';

const RegisterSuccess = () => {
  const navigation = useNavigation();
  let animation = React.createRef();

  useEffect(() => {
    animation.current.play();
  });



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Complete!</Text>
      <LottieView
        ref={animation}
        loop={false}
        style={{
          width: 300,
          height: 300,
        }}
        source={successAn}
        loop
      />
      <Text style={styles.txtInfo}>We sent email verification to your email</Text>
      <Button title="Login" color="#fd9210" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default RegisterSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: PRIMARY_TEXT,
    fontSize: 25,
    fontWeight: 'bold'
  },
  txtInfo: {
    color: PRIMARY_TEXT,
    fontSize: 18,
    maxWidth: 230,
    textAlign: 'center',
    marginBottom: 30
  }
});
