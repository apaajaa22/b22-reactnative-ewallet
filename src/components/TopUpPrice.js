import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Number from './Number';

const TopUpPrice = ({price, onPress, borderStyle, onFocus, onBlur}) => {
  return (
    <TouchableOpacity
      onBlur={onBlur}
      onFocus={onFocus}
      onPress={onPress}
      activeOpacity={0.7}
      style={borderStyle}>
      <Text style={styles.borderText}>
        <Number number={price} />
      </Text>
    </TouchableOpacity>
  );
};

export default TopUpPrice;

const styles = StyleSheet.create({
  borderText: {
    color: '#4c2a86',
    fontWeight: 'bold',
  },
});
