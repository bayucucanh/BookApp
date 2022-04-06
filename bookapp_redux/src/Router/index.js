import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen, Login, Register, SplashScreen, WelcomeAuth, RegisterSuccess} from '../Pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Welcome" component={WelcomeAuth} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
