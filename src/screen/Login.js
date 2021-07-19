import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';
import InputText from '../components/InputText';
import {useDispatch, useSelector} from 'react-redux';
import {SignIn} from '../redux/action/auth';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formData = {
    email: email,
    password: password,
  };

  const onSubmit = () => {
    dispatch(SignIn(formData, navigation));
  };

  return (
    <View style={styles.container}>
      <Header title="Sign In" />
      <View style={styles.wrapperInput}>
        <InputText value={email} onChangeText={setEmail} title="Email" />
        <InputText
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          title="Password"
        />
      </View>
      <View style={styles.wrapperButton}>
        <Button title="Sign In" onPress={onSubmit} />
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
    paddingHorizontal: 20,
  },
});
