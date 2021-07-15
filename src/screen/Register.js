import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';
import InputText from '../components/InputText';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Sign Up" />
      <View style={styles.wrapperInput}>
        <InputText title="Email" />
        <InputText title="No. Handphone" />
        <InputText secureTextEntry title="Password" />
      </View>
      <View style={styles.wrapperButton}>
        <Button title="Sign Up" />
        <Gap height={20} />
        <Button
          isSecondary
          title="Already have an account ?"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {flex: 1},
  wrapperInput: {marginBottom: 40},
  wrapperButton: {
    alignItems: 'center',
    paddingHorizontal: 31,
  },
});
