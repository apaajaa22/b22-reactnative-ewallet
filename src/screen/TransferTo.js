import React, {useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import BalanceItem from '../components/BalanceItem';
import Gap from '../components/Gap';
import Button from '../components/Button';
import {ILDefaultUser} from '../assets';
import {useDispatch, useSelector} from 'react-redux';
import {transfer} from '../redux/action/transfer';
import toastMessage from '../utils/showMessage';
import Number from '../components/Number';

const TransferTo = ({navigation}) => {
  const dispatch = useDispatch();
  const {profile} = useSelector(state => state.profile);
  const {token} = useSelector(state => state.authToken);

  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const formData = {
    phone: phone,
    balance: price,
    trxFee: 0,
  };

  const onSubmit = () => {
    if (price <= 0) {
      toastMessage('minimum top up is 10.000');
    } else if (profile.balance < price) {
      toastMessage('your balance is not enough');
    } else {
      dispatch(transfer(token, formData, navigation));
      setModalVisible(false);
    }
  };

  const onPressed = () => {
    if (phone.length < 1) {
      toastMessage('phone number must be filled');
    } else if (!phone.startsWith('08')) {
      toastMessage('phone number must be start with 08');
    } else if (phone.length < 10) {
      toastMessage('Minimum phone number must be 10');
    } else if (phone.length > 12) {
      toastMessage('Maximum phone number must be 12');
    } else if (price <= 0) {
      toastMessage('minimum top up is 10.000');
    } else if (profile.balance < price) {
      toastMessage('your balance is not enough');
    } else {
      setModalVisible(true);
    }
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalWrapper}>
            <Text style={styles.modalTitle}>Konfirmasi Transfer</Text>
            <Gap height={20} />
            <Text style={styles.greyText}>Penerima</Text>
            <Gap height={10} />
            <View style={styles.modalWrapperProfile}>
              <Image source={ILDefaultUser} style={styles.modalPicture} />
              <View>
                {/* <Text style={styles.modalSendName}>Rahadian Reza R</Text> */}
                <Text style={styles.greyText}>OVO - {phone}</Text>
              </View>
            </View>
            <Gap height={25} />
            <View>
              <Text style={styles.greyText}>Sumber Dana</Text>
              <Gap height={8} />
              <Text style={{color: '#000'}}>OVO Cash</Text>
              <Gap height={20} />
              <Text style={styles.greyText}>Pesan (optional)</Text>
              <Gap height={8} />
              <Text>{desc}</Text>
            </View>
            <Gap height={20} />
            <View>
              <Text style={styles.textDetail}>Detail</Text>
              <View style={styles.modalNominal}>
                <Text style={styles.greyText}>Nominal Transfer</Text>
                <Text style={styles.greyText}>
                  <Number number={price} />
                </Text>
              </View>
              <Gap height={10} />
              <View style={styles.modalNominal}>
                <Text style={styles.greyText}>Biaya Transaksi</Text>
                <Text style={styles.greyText}>Rp 0</Text>
              </View>
              <Gap height={10} />
              <View style={[styles.totalPriceWrapper, styles.modalNominal]}>
                <Text style={styles.totalPrice}>Total</Text>
                <Text style={styles.totalPrice}>
                  <Number number={price} />
                </Text>
              </View>
            </View>
            <View style={styles.modalButton}>
              <Button title="Transfer" onPress={onSubmit} />
              <Gap height={15} />
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textCancel}>BATALKAN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header title="KE SESAMA OVO" />
          <View style={styles.wrapperContent}>
            <View style={styles.wrapperTextInput}>
              <TextInput
                value={phone}
                onChangeText={e => setPhone(e)}
                placeholder="masukkan nomor ponsel"
                keyboardType="number-pad"
              />
              <Icon name="contacts" size={28} color="grey" />
            </View>
            <Text>Sumber Dana</Text>
            <Gap height={10} />
            <BalanceItem price={profile.balance} />
            <Gap height={20} />
            <View style={styles.wrapperNominalTF}>
              <Text>Nominal Transfer</Text>
              <View style={styles.wrapperPrice}>
                <Text style={styles.textInput}>Rp</Text>
                <TextInput
                  style={styles.textInput}
                  value={price}
                  placeholder="0"
                  placeholderTextColor="#000"
                  onChangeText={e => setPrice(e)}
                  keyboardType="number-pad"
                />
              </View>
            </View>
            <Gap height={20} />
            <TextInput
              style={styles.desc}
              value={desc}
              onChangeText={e => setDesc(e)}
              placeholder="Pesan (opsional)"
            />
          </View>
          <View style={styles.button}>
            <Button onPress={onPressed} title="LANJUTKAN" />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default TransferTo;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  wrapperContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },
  wrapperTextInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
  wrapperNominalTF: {
    backgroundColor: '#F2F2F2',
    padding: 15,
  },
  wrapperPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 22,
    color: '#000',
  },
  desc: {
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  button: {
    marginTop: 120,
    marginBottom: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 100,
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
  modalPicture: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginRight: 10,
  },
  modalWrapperProfile: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: 20,
  },
  textCancel: {
    fontWeight: 'bold',
    color: '#0BCAD4',
  },
});
