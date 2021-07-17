import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import HistoryItem from '../components/HistoryItem';

const History = () => {
  return (
    <View>
      <Header title="History" />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});
