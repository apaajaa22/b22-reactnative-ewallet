import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TopUpPrice = ({price, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.border}>
      <Text style={styles.borderText}>Rp {price}</Text>
    </TouchableOpacity>
  );
};

export default TopUpPrice;

const styles = StyleSheet.create({
  border: {
    borderColor: '#4c2a86',
    borderWidth: 1,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100 / 2,
  },
  borderText: {
    color: '#4c2a86',
    fontWeight: 'bold',
  },
});
