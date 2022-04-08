import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import { PRIMARY_COLOR, PRIMARY_TEXT, SECOND_COLOR } from '../../utils/constant';

const SplashScreen = ({navigation}) => {
  let animation = React.createRef();

  useEffect(() => {
    animation.current.play();
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={PRIMARY_COLOR}
      />

      <LottieView
        ref={animation}
        loop={false}
        style={{
          width: 400,
          height: 400,
        }}
        source={require('../../Assets/Images/splash.json')}
        loop
      />
      <View style={styles.apkInfo}>
        <Text style={styles.apkName}>Lithium Books App</Text>
        <Text style={styles.apkDeveloper}>by Bayu Cucan Herdian</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR
  },
  apkInfo: {
    position: 'absolute',
    bottom: 25
  },
  apkName: {
    color: SECOND_COLOR,
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  apkDeveloper: {
    color: PRIMARY_TEXT,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
