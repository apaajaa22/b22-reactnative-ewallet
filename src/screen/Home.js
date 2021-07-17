import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ILConsole,
  ILInvest,
  ILMore,
  ILPhone,
  ILPLN,
  ILShield,
  ILTv,
  ILUmbrella,
} from '../assets';
import Gap from '../components/Gap';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Header main title="OVO" />
        <View style={styles.wrapperTop}>
          <Text style={styles.infoLabel}>OVO Cash</Text>
          <Text style={styles.infoLabelPrice}>RP 20000</Text>
        </View>
        <View style={styles.wrapperContentInfo}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TopUp')}
            activeOpacity={0.7}
            style={styles.wrapperIcon}>
            <Icon name="ios-add-circle-outline" size={32} color="#4c2a86" />
            <Text style={styles.textIcon}>Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Transfer')}
            activeOpacity={0.7}
            style={styles.wrapperIcon}>
            <Icon name="arrow-up-circle-outline" size={32} color="#4c2a86" />
            <Text style={styles.textIcon}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('History')}
            activeOpacity={0.7}
            style={styles.wrapperIcon}>
            <IconMaterial name="history" size={32} color="#4c2a86" />
            <Text style={styles.textIcon}>History</Text>
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <View style={styles.wrapperLogo}>
          <TouchableOpacity style={styles.wrapperItem}>
            <Image source={ILPLN} style={styles.picture} />
            <Text>PLN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Pulsa')}
            style={styles.wrapperItem}>
            <Image source={ILPhone} style={styles.picture} />
            <Text>Pulsa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapperItem}>
            <Image source={ILConsole} style={styles.picture} />
            <Text>Game</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapperItem}>
            <Image source={ILInvest} style={styles.picture} />
            <Text>Invest</Text>
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <View style={styles.wrapperLogo}>
          <TouchableOpacity style={styles.wrapperItem}>
            <Image source={ILShield} style={styles.picture} />
            <Text>BPJS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapperItem}>
            <Image source={ILTv} style={styles.picture} />
            <Text>Internet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapperItem}>
            <Image source={ILUmbrella} style={styles.picture} />
            <Text>Proteksi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapperItem}>
            <Image source={ILMore} style={styles.picture} />
            <Text>Lainnya</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerPromo}>
        <Text>Info Promo</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerTop: {backgroundColor: '#fff', marginBottom: 7, paddingBottom: 20},
  wrapperTop: {
    backgroundColor: '#4c2a86',
    height: 150,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  wrapperContentInfo: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: -40,
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
  },
  wrapperIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIcon: {
    fontSize: 16,
    color: '#4c2a86',
  },
  infoLabel: {fontSize: 16, color: '#fff', fontWeight: 'bold'},
  infoLabelPrice: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
  },
  containerPromo: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  wrapperLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  picture: {width: 30, height: 30},
  wrapperItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
  },
});
