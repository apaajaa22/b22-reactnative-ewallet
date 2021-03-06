import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Number from './Number';
import moment from 'moment';

const HistoryItem = ({notif, date, title, price}) => {
  return (
    <View>
      <Text style={styles.paymentDate}>{moment(date).format('lll')}</Text>
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
            <Text style={styles.textNotif}>Transaksi {title}</Text>
            <Text>
              <Number
                operator={title === 'Top up balance' ? '+' : '-'}
                number={price}
                style={title === 'Top up balance' ? styles.inc : styles.dec}
              />
            </Text>
          </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textNotif: {
    fontWeight: 'bold',
    paddingVertical: 15,
  },
  inc: {
    color: 'green',
  },
  dec: {
    color: 'red',
  },
});
