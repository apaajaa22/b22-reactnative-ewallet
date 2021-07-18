import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HistoryItem = ({notif}) => {
  return (
    <View>
      <Text style={styles.paymentDate}>17 Juni 2021</Text>
      {!notif ? (
        <View style={styles.wrapperMainHistory}>
          <Text style={styles.title}>TOKOPEDIA</Text>
          <View style={styles.wrapperHistoryItem}>
            <Text>Pembayaran</Text>
            <Text>OVO Points 6099</Text>
          </View>
        </View>
      ) : (
        <View style={styles.wrapperMainHistory}>
          <View style={styles.borderBottom}>
            <Text style={styles.textNotif}>
              Top up Rp 15.000 dari BANK MANDIRI telah berhasil
            </Text>
          </View>
          <Text style={styles.textNotif}>
            Selamat, Upgrade OVO Premier anda telah di setujui
          </Text>
        </View>
      )}
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
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
  },
  textNotif: {
    fontWeight: 'bold',
    paddingVertical: 15,
  },
});
