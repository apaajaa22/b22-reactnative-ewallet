import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Header main title="OVO" />
        <View style={styles.wrapperTop}>
          <Text style={styles.infoLabel}>OVO Cash</Text>
          <Text style={styles.infoLabelPrice}>RP 20000</Text>
        </View>
        <View style={styles.wrapperContentInfo}>
          <TouchableOpacity activeOpacity={0.7} style={styles.wrapperIcon}>
            <Icon name="ios-add-circle-outline" size={32} color="#8e44ac" />
            <Text style={styles.textIcon}>Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.wrapperIcon}>
            <Icon name="arrow-up-circle-outline" size={32} color="#8e44ac" />
            <Text style={styles.textIcon}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.wrapperIcon}>
            <IconMaterial name="history" size={32} color="#8e44ac" />
            <Text style={styles.textIcon}>History</Text>
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
    backgroundColor: '#8e44ac',
    height: 150,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 10,
    paddingHorizontal: 31,
  },
  wrapperContentInfo: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginHorizontal: 31,
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
    color: '#8e44ac',
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
    paddingHorizontal: 31,
  },
});
