import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ItemInfo = ({border, title, iconName, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.wrapper(border)}>
      <Icon style={styles.icon} name={iconName} size={20} />
      <Text style={styles.text}>{title}</Text>
      <Icon name="chevron-right" />
    </TouchableOpacity>
  );
};

export default ItemInfo;

const styles = StyleSheet.create({
  wrapper: border => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: border ? 1 : 0,
    borderColor: '#f2f2f2',
  }),
  icon: {
    paddingRight: 10,
  },
  text: {
    flex: 1,
  },
});
