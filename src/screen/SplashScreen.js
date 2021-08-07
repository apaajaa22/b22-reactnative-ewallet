import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const {token} = useSelector(state => state.authToken);
  useEffect(() => {
    console.log('token', token);
    if (token) {
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    } else {
      setTimeout(() => {
        navigation.replace('GetStarted');
      }, 1500);
    }
  }, [navigation, token]);
  return (
    <View style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>OVO</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Powered By React Native</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#4c2a86'},
  wrapperTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 80,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    paddingBottom: 40,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
