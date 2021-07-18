import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Gap from './Gap';

const Header = ({title, main, sec}) => {
  const navigation = useNavigation();
  return (
    <View>
      {main ? (
        <View style={styles.mainHeader(sec)}>
          <Text style={styles.mainTitle(sec)}>{title}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <IconMaterial name="bell" size={28} color={sec ? '#000' : '#fff'} />
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
  mainHeader: sec => ({
    backgroundColor: sec ? '#fff' : '#4c2a86',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  }),
  mainTitle: sec => ({
    fontSize: 22,
    fontWeight: 'bold',
    color: sec ? '#000' : '#fff',
  }),
  container: {
    height: 80,
    alignItems: 'center',
    backgroundColor: '#4c2a86',
    paddingLeft: 24,
    flexDirection: 'row',
  },
  text: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '600',
  },
});
