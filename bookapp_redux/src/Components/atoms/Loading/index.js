import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, {useEffect} from 'react'
import LottieView from 'lottie-react-native';
import { PRIMARY_COLOR } from '../../../utils/constant';

const Loading = () => {
  let animation = React.createRef();

  useEffect(() => {
    animation.current.play();
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
        source={require('../../../Assets/Images/loading.json')}
      />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR
  }
})