// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import Router from './Router';


function App() {
  const [isOffline, setOfflineStatus] = useState(false);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
    return () => removeNetInfoSubscription();
  }, []);

  return (
    <>
      {isOffline ? (
        <Text>No Internet</Text>
      ) : (
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      )}
    </>
  );
}

export default App;
