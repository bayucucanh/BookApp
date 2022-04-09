import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { nointernet } from '../../../Assets/Images'
import LottieView from 'lottie-react-native';
import { PRIMARY_COLOR, PRIMARY_TEXT } from '../../../utils/constant';

const NoInternet = () => {
  let animation = React.createRef();

  useEffect(() => {
    animation.current.play();
  });
  return (
    <View style={styles.container}>
      <LottieView
        ref={animation}
        loop={false}
        style={{
          width: 300,
          height: 250,
        }}
        loop
        source={require('../../../Assets/Images/nointernet.json')}
      />
      <Text style={styles.title}>No Internet Connection</Text>
      <Text style={styles.info}>Please Check Your Internet Connection and try again</Text>
    </View>
  )
}

export default NoInternet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR
  },
  title: {
    color: PRIMARY_TEXT,
    fontSize: 23,
    fontWeight: 'bold'
  },
  info: {
    color: PRIMARY_TEXT,
    fontSize: 17,
    marginTop: 10,
    maxWidth: 250,
    textAlign: 'center'
  }
})