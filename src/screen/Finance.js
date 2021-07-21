import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Gap from '../components/Gap';
import ItemFinance from '../components/ItemFinance';

const Finance = () => {
  return (
    <View>
      <Header main title="Finance" />
      <View style={styles.wrapperContent}>
        <ItemFinance
          icon="sack"
          title="Modal Karyawan"
          desc="Hadir untuk memberikan dana pinjaman untuk keperluan kamu"
          name="Taralite"
        />
        <ItemFinance
          icon="align-vertical-bottom"
          title="Invest"
          desc="Saatnya investasi dengan yang pasti beli produk investasi edngan mudah dan aman pake OVO Cash!"
          name="Bareksa"
        />
      </View>
    </View>
  );
};

export default Finance;

const styles = StyleSheet.create({
  wrapperContent: {
    padding: 20,
  },
});
