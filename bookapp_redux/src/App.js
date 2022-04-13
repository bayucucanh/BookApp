// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import Router from './Router';
import {Provider} from 'react-redux';
import {store, Persistor} from './redux/store';
import NoInternet from './Components/atoms/NoInternet';
import {PersistGate} from 'redux-persist/integration/react';

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
          <PersistGate loading={null} persistor={Persistor}>
            <NavigationContainer>
              <Router />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      )}
    </>
  );
}

export default App;
