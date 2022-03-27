import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '../../Components/'

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen)
  }

  return (
    <View style={styles.wrapper}> 
      <Text>Welcome Auth</Text>
      <Button title='Login' onPress={() => handleGoTo('Login')}/>
      <Button title='Register' onPress={() => handleGoTo('Register')}/>
    </View>
  )
}

export default WelcomeAuth

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})