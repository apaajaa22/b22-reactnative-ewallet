import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Gap from '../components/Gap';
import {useSelector} from 'react-redux';

const GetStarted = ({navigation}) => {
  const {token} = useSelector(state => state.authToken);
  useEffect(() => {
    if (token) {
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    }
  }, [navigation, token]);
  return (
    <View style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>OVO</Text>
      </View>
      <View style={styles.wrapperButton}>
        <Button onPress={() => navigation.navigate('Login')} title="Login" />
        <Gap height={20} />
        <Text style={styles.or}>ATAU</Text>
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
    backgroundColor: '#4c2a86',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  wrapperTitle: {flex: 1, justifyContent: 'center'},
  title: {
    fontSize: 80,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  wrapperButton: {
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  or: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
});
