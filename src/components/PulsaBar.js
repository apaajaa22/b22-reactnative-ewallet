import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Button from './Button';
import Gap from './Gap';
import {useDispatch, useSelector} from 'react-redux';
import {transaction} from '../redux/action/transaction';
import toastMessage from '../utils/showMessage';
import Number from './Number';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: 'black',
      height: 100,
      width: 10,
    }}
    style={{backgroundColor: 'white', shadowColor: '#4c2a86'}}
    tabStyle={{
      backgroundColor: '#fff',
    }}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: focused ? '#4c2a86' : '#9A9A9D',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const TopUp = () => {
  const dispatch = useDispatch();
  const {phone} = useSelector(state => state.phone);
  const {token} = useSelector(state => state.authToken);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [pulsa, setPulsa] = useState('');
  const price = pulsa + 1500;
  const trx = 0;
  const total = price + trx;
  const DATA = [
    {id: 1, price: 5000},
    {id: 2, price: 10000},
    {id: 3, price: 20000},
    {id: 4, price: 30000},
    {id: 5, price: 40000},
    {id: 6, price: 50000},
    {id: 7, price: 60000},
    {id: 8, price: 70000},
  ];

  const formData = {
    balance: total,
    trxFee: 0,
  };

  const onSubmit = () => {
    if (phone.length <= 0) {
      toastMessage('Number must be filled');
    } else {
      dispatch(transaction(token, formData, navigation));
    }
  };

  const renderItem = ({item}) => {
    const onPress = () => {
      if (phone.length <= 0) {
        toastMessage('Number must be filled');
      } else {
        setModalVisible(true);
        setPulsa(item.price);
        console.log(item);
      }
    };
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: 170,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          marginHorizontal: 10,
          marginVertical: 10,
          borderRadius: 8,
        }}>
        <Text>
          <Number type="decimal" number={item.price} />
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalWrapper}>
            <Text style={styles.modalTitle}>Informasi Pelanggan</Text>
            <Gap height={20} />
            <View style={styles.wrapperInfo}>
              <Text>Nomor Ponsel</Text>
              <Text>{phone}</Text>
            </View>
            <Gap height={10} />
            <View style={styles.wrapperInfo}>
              <Text>Voucher Telkomsel</Text>
              <Text>
                <Number type="decimal" number={pulsa} />
              </Text>
            </View>
            <Gap height={20} />
            <View>
              <Text style={styles.textDetail}>Detail Pembayaran</Text>
              <View style={styles.modalNominal}>
                <Text style={styles.greyText}>Harga Voucher</Text>
                <Text style={styles.greyText}>
                  <Number number={price} />
                </Text>
              </View>
              <Gap height={10} />
              <View style={styles.modalNominal}>
                <Text style={styles.greyText}>Biaya Transaksi</Text>
                <Text style={styles.greyText}>Rp {trx}</Text>
              </View>
              <Gap height={10} />
              <View style={[styles.totalPriceWrapper, styles.modalNominal]}>
                <Text style={styles.totalPrice}>Total Pembayaran</Text>
                <Text style={styles.totalPrice}>
                  <Number number={total} />
                </Text>
              </View>
            </View>
            <View style={styles.modalButton}>
              <View style={{width: 150}}>
                <Button
                  title="Ubah"
                  isSecondary
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>
              <Gap width={15} />
              <View style={{width: 150}}>
                <Button title="Konfirmasi" onPress={onSubmit} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={{
            alignItems: 'center',
            marginVertical: 15,
          }}
        />
      </View>
    </>
  );
};

const PaketData = () => {
  return (
    <View>
      <Text style={styles.noTransaction}>Tidak ada paket data</Text>
    </View>
  );
};

const renderScene = SceneMap({
  1: TopUp,
  2: PaketData,
});

const PulsaBar = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Isi Pulsa'},
    {key: '2', title: 'Paket Data'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default PulsaBar;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F2F2F2'},
  wrapperFirst: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    flex: 1,
  },
  titleFirst: {marginVertical: 15, fontSize: 18, fontWeight: 'bold'},
  noTransaction: {
    fontSize: 18,
    color: 'grey',
    textAlign: 'center',
    marginTop: 40,
  },
  modalContainer: {
    height: '100%',
    paddingTop: 350,
    backgroundColor: '#000000a0',
  },
  modalWrapper: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#4c2a86',
  },

  modalSendName: {
    textTransform: 'uppercase',
  },
  greyText: {
    color: 'grey',
  },
  textDetail: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  modalNominal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalPrice: {
    fontWeight: 'bold',
    color: '#000',
  },
  totalPriceWrapper: {
    borderTopWidth: 1,
    borderColor: 'grey',
    paddingTop: 5,
  },
  modalButton: {
    alignItems: 'center',
    marginTop: 40,
    flexDirection: 'row',
  },
  textCancel: {
    fontWeight: 'bold',
    color: '#0BCAD4',
  },
  wrapperInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
