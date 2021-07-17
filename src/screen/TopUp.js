import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import TopUpBar from '../components/TopUpBar';

const TopUp = () => {
  return (
    <View style={styles.container}>
      <Header title="Top Up" />
      <View style={styles.container}>
        <TopUpBar />
      </View>
    </View>
  );
};

export default TopUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
