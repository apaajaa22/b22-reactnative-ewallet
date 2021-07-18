import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Header title="Notifications" />
      <View style={styles.container}>
        <NotificationBar />
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
