// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import Router from './Router';
import {Provider} from 'react-redux';
import {store} from './redux/';
import NoInternet from './Components/atoms/NoInternet';

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
        <NoInternet />
      ) : (
        <Provider store={store}>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </Provider>
      )}
    </>
  );
}

export default App;
