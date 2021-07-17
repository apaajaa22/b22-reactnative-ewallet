import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';
import Gap from './Gap';

const PaymentCard = ({icon, name, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.containerMethodItem}>
      <View style={styles.wrapperMethodItem}>
        <IconIon name={icon} color="#4c2a86" size={32} />
        <Gap width={8} />
        <Text>{name}</Text>
      </View>
      <IconIon name="chevron-forward" size={25} />
    </TouchableOpacity>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  wrapperMethodItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerMethodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
});
