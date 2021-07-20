import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Gap from './Gap';
import Number from './Number';

const BalanceItem = ({price}) => {
  return (
    <View style={styles.wrapperFirstContent}>
      <View style={styles.logo}>
        <Text style={styles.textLogo}>OVO</Text>
      </View>
      <Gap width={20} />
      <View>
        <Text style={styles.subTitleFirst}>OVO CASH</Text>
        <Text>
          Balance <Number number={price} />
        </Text>
      </View>
    </View>
  );
};

export default BalanceItem;

const styles = StyleSheet.create({
  wrapperFirstContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 8,
    borderColor: '#bdc3c7',
    borderRadius: 8,
    marginBottom: 15,
  },
  logo: {
    backgroundColor: '#4c2a86',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 3,
  },
  subTitleFirst: {fontWeight: 'bold', color: '#000'},
});
