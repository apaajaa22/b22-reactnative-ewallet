import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Gap from '../components/Gap';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>OVO</Text>
      </View>
      <View style={styles.wrapperButton}>
        <Button onPress={() => navigation.navigate('Login')} title="Login" />
        <Gap height={20} />
        <Button
          onPress={() => navigation.navigate('Register')}
          title="Register"
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8e44ac',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  wrapperTitle: {flex: 1, justifyContent: 'center'},
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  wrapperButton: {
    paddingHorizontal: 31,
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
});
