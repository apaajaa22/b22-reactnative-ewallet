import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Router from './src/Router';

const App = () => {
  // const trigger = () => {
  //   PushNotification.localNotification({
  //     channelId: 'general',
  //     title: 'local notif',
  //     message: 'hai ini local notif',
  //   });
  // };
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
