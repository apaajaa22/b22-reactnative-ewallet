import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import TransferBar from '../components/TransferBar';

const Transfer = () => {
  return (
    <View style={styles.container}>
      <Header title="TRANSFER" />
      <View style={styles.container}>
        <TransferBar />
      </View>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
