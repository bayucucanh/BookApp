import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';

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
      <LottieView
        ref={animation}
        loop={false}
        style={{
          width: 300,
          height: 300,
        }}
        source={require('../../Assets/Images/loading.json')}
        loop
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
