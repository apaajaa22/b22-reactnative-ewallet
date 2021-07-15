/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';

AppRegistry.registerComponent(appName, () => App);

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },
});

PushNotification.createChannel({
  channelId: 'general',
  channelName: 'general notification',
});
