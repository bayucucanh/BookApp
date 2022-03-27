import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome')
    }, 2000)
  })
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})