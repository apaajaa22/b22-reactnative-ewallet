import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({title, onPress, isSecondary}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container(isSecondary)}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: isSecondary => ({
    backgroundColor: isSecondary ? '#95a5a6' : '#f39c12',
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 31,
    borderRadius: 20,
    width: '100%',
  }),
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
