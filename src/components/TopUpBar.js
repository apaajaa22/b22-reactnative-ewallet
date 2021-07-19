import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Gap from './Gap';
import TopUpPrice from './TopUpPrice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import Button from './Button';
import PaymentCard from './PaymentCard';
import BalanceItem from './BalanceItem';
import {useDispatch, useSelector} from 'react-redux';
import {topUp} from '../redux/action/topup';
import toastMessage from '../utils/showMessage';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: 'blue',
      height: 3,
      width: 0.5,
    }}
    style={{backgroundColor: 'white', shadowColor: '#4c2a86'}}
    tabStyle={{
      backgroundColor: '#4c2a86',
    }}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: focused ? '#fff' : '#9A9A9D',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const TopUp = () => {
  const {profile} = useSelector(state => state.profile);
  const [price, setPrice] = useState('');
  const navigation = useNavigation();
  const formData = {
    balance: Number(price),
    fee: 0,
  };
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.authToken);

  const onSubmit = () => {
    if (price <= 0) {
      toastMessage('minimum top up is 10.000');
    } else {
      dispatch(topUp(token, formData, navigation));
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.wrapperFirst}>
        <Text style={styles.titleFirst}>Top Up ke</Text>
        <BalanceItem price={Number(profile.balance).toLocaleString('en')} />
      </View>
      <View style={styles.wrapperFirst}>
        <Text style={styles.titleFirst}>Pilih Nominal Top Up</Text>
        <View style={styles.wrapperPrice}>
          <TopUpPrice onPress={() => setPrice('100000')} price="100000" />
          <TopUpPrice onPress={() => setPrice('200000')} price="200000" />
          <TopUpPrice onPress={() => setPrice('300000')} price="300000" />
        </View>
        <Text style={styles.subTitleSec}>
          Atau masukan nominal top up di sini
        </Text>
        <TextInput
          value={price}
          onChangeText={e => setPrice(e)}
          placeholder="Rp"
          style={styles.textInput}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.wrapperFirst}>
        <Text style={styles.titleFirst}>Kartu Debit</Text>
        <View style={styles.wrapperCard}>
          <Icon name="credit-card-plus-outline" size={30} color="#4c2a86" />
          <Text>Tambah Kartu Kredit</Text>
        </View>
      </View>
      <View style={styles.wrapperButton}>
        <Button onPress={onSubmit} title="Top Up Sekarang" />
      </View>
    </ScrollView>
  );
};

const Method = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.wrapperFirst}>
        <View style={styles.wrapperSaldo}>
          <Text>Top Up Saldo Ke</Text>
          <Text style={styles.saldoOvoText}>OVO Cash</Text>
        </View>
        <View style={styles.wrapperCash}>
          <Text>SALDO OVO CASH</Text>
          <Text>RP0</Text>
        </View>
        <Text style={styles.subTextSaldo}>
          Maks. Saldo OVO Cash Rp10.000.000
        </Text>
      </View>
      <Text style={styles.subTextSaldo}>
        Top up makin mudah dengan metode berikut
      </Text>
      <View>
        <PaymentCard icon="card" name="Kartu Debit" />
        <PaymentCard icon="ios-business" name="ATM" />
        <PaymentCard
          icon="ios-phone-portrait"
          name="Internet / Mobile Banking"
        />
        <PaymentCard icon="md-bicycle" name="Grab" />
        <PaymentCard icon="ios-business-outline" name="Tokopedia" />
        <PaymentCard icon="ios-business-outline" name="Merchant / Mitra OVO" />
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: TopUp,
  2: Method,
});

const TransferBar = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Instan Top Up'},
    {key: '2', title: 'Metode Lain'},
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

export default TransferBar;

const styles = StyleSheet.create({
  wrapperFirst: {
    marginBottom: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  titleFirst: {marginVertical: 15, fontSize: 18, fontWeight: 'bold'},
  subTitleFirst: {fontWeight: 'bold', color: '#000'},
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
  wrapperFirstContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 8,
    borderColor: '#bdc3c7',
    borderRadius: 8,
    marginBottom: 15,
  },
  wrapperPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  subTitleSec: {
    color: 'grey',
  },
  textInput: {
    marginTop: 10,
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    marginBottom: 40,
    backgroundColor: '#F2F2F2',
  },
  wrapperCard: {
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4c2a86',
  },
  wrapperButton: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  wrapperSaldo: {
    borderBottomWidth: 1,
    marginVertical: 18,
    borderColor: 'grey',
  },
  wrapperCash: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    borderColor: 'grey',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  saldoOvoText: {
    fontSize: 17,
  },
  subTextSaldo: {
    textAlign: 'center',
    marginBottom: 20,
  },
});
