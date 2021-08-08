import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';
import InputText from '../components/InputText';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {SignUp} from '../redux/action/auth';
import toastMessage from '../utils/showMessage';
import {changePassword} from '../redux/action/profile';

const ChangePassword = ({navigation}) => {
  const {token} = useSelector(state => state.authToken);
  const [oldPassword, setOldPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();

  const formData = {
    oldPassword: oldPassword,
    newPassword: newPassword,
  };

  const onSubmit = () => {
    if (oldPassword.length < 1) {
      toastMessage('old password must be filled');
    } else if (oldPassword.length < 6) {
      toastMessage('minimum password length must be 6 characters at least');
    } else if (oldPassword.length > 12) {
      toastMessage('maximum password length is 12 characters');
    } else if (rePassword.length < 1) {
      toastMessage('password must be filled');
    } else if (rePassword.length < 6) {
      toastMessage('minimum password length must be 6 characters at least');
    } else if (rePassword.length > 12) {
      toastMessage('maximum password length is 12 characters');
    } else if (rePassword !== newPassword) {
      toastMessage("password doesn't match");
    } else if (newPassword.length < 1) {
      toastMessage('password must be filled');
    } else if (newPassword.length < 6) {
      toastMessage('minimum password length must be 6 characters at least');
    } else if (newPassword.length > 12) {
      toastMessage('maximum password length is 12 characters');
    } else {
      dispatch(changePassword(token, formData, navigation));
      dispatch({type: 'GET_TOKEN', payload: null});
      navigation.reset({index: 0, routes: [{name: 'GetStarted'}]});
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Change Password" />
      <View style={styles.wrapperInput}>
        <InputText
          value={oldPassword}
          onChangeText={setOldPassword}
          title="Old password"
          secureTextEntry
        />
        <InputText
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
          title="New password"
        />
        <InputText
          value={rePassword}
          onChangeText={setRePassword}
          title="Retype new password"
          secureTextEntry
        />
      </View>
      <View style={styles.wrapperButton}>
        <Button title="Change Password" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {flex: 1},
  wrapperInput: {marginBottom: 40},
  wrapperButton: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
