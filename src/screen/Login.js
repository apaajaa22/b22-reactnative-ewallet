import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';
import InputText from '../components/InputText';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Sign In" />
      <View style={styles.wrapperInput}>
        <InputText title="Email" />
        <InputText secureTextEntry title="Password" />
      </View>
      <View style={styles.wrapperButton}>
        <Button
          title="Sign In"
          onPress={() => navigation.navigate('MainApp')}
        />
        <Gap height={20} />
        <Button
          isSecondary
          title="Create New Account"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {flex: 1},
  wrapperInput: {marginBottom: 40},
  wrapperButton: {
    alignItems: 'center',
    paddingHorizontal: 31,
  },
});
