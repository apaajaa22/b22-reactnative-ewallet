import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HistoryItem = () => {
  return (
    <View>
      <Text style={styles.paymentDate}>17 Juni 2021</Text>
      <View style={styles.wrapperMainHistory}>
        <Text style={styles.title}>TOKOPEDIA</Text>
        <View style={styles.wrapperHistoryItem}>
          <Text>Pembayaran</Text>
          <Text>OVO Points 6099</Text>
        </View>
      </View>
    </View>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  paymentDate: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  wrapperHistoryItem: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperMainHistory: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
  },
});
