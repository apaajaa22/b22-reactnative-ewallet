import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';
import InputText from '../components/InputText';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {SignUp} from '../redux/action/auth';

const Register = ({navigation}) => {
  const {token} = useSelector(state => state.authToken);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const formData = {
    email: email,
    phone: phone,
    password: password,
  };

  const onSubmit = () => {
    dispatch(SignUp(formData, navigation));
  };

  return (
    <View style={styles.container}>
      <Header title="Sign Up" />
      <View style={styles.wrapperInput}>
        <InputText value={email} onChangeText={setEmail} title="Email" />
        <InputText
          value={phone}
          onChangeText={setPhone}
          title="No. Handphone"
        />
        <InputText
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          title="Password"
        />
      </View>
      <View style={styles.wrapperButton}>
        <Button title="Sign Up" onPress={onSubmit} />
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
    paddingHorizontal: 20,
  },
});
