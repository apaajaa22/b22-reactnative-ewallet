import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import GetStarted from '../screen/GetStarted';
import Login from '../screen/Login';
import Register from '../screen/Register';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import TabBar from '../components/TabBar';
import TopUp from '../screen/TopUp';
import Transfer from '../screen/Transfer';
import History from '../screen/History';
import TransferTo from '../screen/TransferTo';
import EditProfile from '../screen/EditProfile';
import EditProfileDetail from '../screen/EditProfileDetail';
import Pulsa from '../screen/Pulsa';
import Notifications from '../screen/Notifications';

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen component={Home} name="Home" />
      <Tab.Screen component={Profile} name="Profile" />
    </Tab.Navigator>
  );
};

const Router = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="GetStarted">
      <Stack.Screen
        component={GetStarted}
        name="GetStarted"
        options={{
          headerShown: false,
          title: 'GetStarted',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={Login}
        name="Login"
        options={{
          headerShown: false,
          title: 'Login',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={Register}
        name="Register"
        options={{
          headerShown: false,
          title: 'Register',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={MainApp}
        name="MainApp"
        options={{
          headerShown: false,
          title: 'MainApp',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={TopUp}
        name="TopUp"
        options={{
          headerShown: false,
          title: 'TopUp',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={Transfer}
        name="Transfer"
        options={{
          headerShown: false,
          title: 'Transfer',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={History}
        name="History"
        options={{
          headerShown: false,
          title: 'History',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={TransferTo}
        name="TransferTo"
        options={{
          headerShown: false,
          title: 'TransferTo',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={EditProfile}
        name="EditProfile"
        options={{
          headerShown: false,
          title: 'EditProfile',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={EditProfileDetail}
        name="EditProfileDetail"
        options={{
          headerShown: false,
          title: 'EditProfileDetail',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={Pulsa}
        name="Pulsa"
        options={{
          headerShown: false,
          title: 'Pulsa',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        component={Notifications}
        name="Notifications"
        options={{
          headerShown: false,
          title: 'Notifications',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
