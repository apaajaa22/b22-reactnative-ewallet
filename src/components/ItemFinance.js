import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Gap from '../components/Gap';

const ItemFinance = ({icon, title, desc, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperItem}>
        <View style={styles.wrapperTitle}>
          <Icon name={icon} size={28} />
          <Gap width={15} />
          <Text style={styles.textTitle}>{title}</Text>
          <Gap width={15} />
          <View style={styles.wrapperNew}>
            <Text style={styles.textNew}>NEW</Text>
          </View>
        </View>
      </View>
      <View style={styles.wrapperItem}>
        <View style={styles.wrapperTitle}>
          <Gap width={15} />
          <Text style={styles.textTitle}>{desc}</Text>
          <Gap width={15} />
        </View>
      </View>
      <View style={styles.wrapperItem}>
        <Gap width={15} />
        <View style={styles.wrapperThird}>
          <Text>Powered by {name}</Text>
          <View style={styles.wrapperButton}>
            <Text style={styles.textButton}>Mulai</Text>
          </View>
        </View>
        <Gap width={15} />
      </View>
    </View>
  );
};

export default ItemFinance;

const styles = StyleSheet.create({
  container: {marginBottom: 15, borderRadius: 10, backgroundColor: '#fff'},
  wrapperTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 20,
    borderBottomColor: '#f2f2f2',
  },
  textTitle: {
    fontWeight: 'bold',
  },
  wrapperNew: {
    backgroundColor: 'red',
    padding: 3,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 5,
  },
  textNew: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },
  wrapperThird: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  wrapperButton: {
    backgroundColor: '#4c2a86',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 50,
  },
  textButton: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
