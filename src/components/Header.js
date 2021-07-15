import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Gap from './Gap';

const Header = ({title, main}) => {
  const navigation = useNavigation();
  return (
    <View>
      {main ? (
        <View style={styles.mainHeader}>
          <Text style={styles.mainTitle}>{title}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconMaterial name="bell" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={28} color="#fff" />
          </TouchableOpacity>
          <Gap width={20} />
          <Text style={styles.text}>{title}</Text>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainHeader: {
    backgroundColor: '#8e44ac',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 31,
  },
  mainTitle: {fontSize: 22, fontWeight: 'bold', color: '#fff'},
  container: {
    height: 108,
    alignItems: 'center',
    backgroundColor: '#8e44ac',
    paddingLeft: 24,
    flexDirection: 'row',
  },
  text: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});
