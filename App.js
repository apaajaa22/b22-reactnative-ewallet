import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Router from './src/Router';
import {Provider, useSelector} from 'react-redux';
import reduxConfig from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import Loading from './src/components/Loading';
// import {useDispatch} from 'react-redux';
const redux = reduxConfig();

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
    redux.store.dispatch({type: 'REGISTER_TOKEN', payload: token});
  },
});

PushNotification.createChannel({
  channelId: 'general',
  channelName: 'general notification',
});

const MainApp = () => {
  const {isLoading} = useSelector(state => state.globalReducer);
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <Provider store={redux.store}>
      <PersistGate persistor={redux.persistor}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
