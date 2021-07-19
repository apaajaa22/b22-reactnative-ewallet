import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ILDefaultUser} from '../assets';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {updateEmail, updatePhone} from '../redux/action/profile';

const EditProfileDetail = ({route}) => {
  const {type} = route.params;
  const [color, setColor] = useState('grey');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  console.log(phone);
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.authToken);
  const {profile} = useSelector(state => state.profile);

  const onSubmit = () => {
    if (type === 'phone') {
      dispatch(updatePhone(token, phone));
    } else {
      dispatch(updateEmail(token, email));
    }
  };

  const onBlur = () => {
    setColor('grey');
  };
  const onFocus = () => {
    setColor('#0BCAD4');
  };
  return (
    <View style={styles.mainContainer}>
      <Header title="EDIT PROFIL" />
      <View style={styles.container}>
        <View style={styles.wrapperImage}>
          {type === 'phone' ? (
            <Text style={styles.textTitle}>Ubah nomor ponsel</Text>
          ) : (
            <Text style={styles.textTitle}>Ubah email</Text>
          )}
        </View>
        <Gap height={20} />
        <View>
          {type === 'phone' ? (
            <View>
              <Text>Nomor Ponsel Terdaftar</Text>
              <Gap height={8} />
              <Text>{profile.phone}</Text>
            </View>
          ) : (
            <View>
              <Text>Email Terdaftar</Text>
              <Gap height={8} />
              <Text>{profile.email}</Text>
            </View>
          )}
        </View>
        <Gap height={20} />
        <TextInput
          onFocus={onFocus}
          onBlur={onBlur}
          style={styles.textInput(color)}
          placeholder={type === 'phone' ? 'Nomor Ponsel Baru' : 'Email Baru'}
          onChangeText={type === 'phone' ? setPhone : setEmail}
        />
        <Gap height={20} />
        <Text>Instruksi</Text>
        <Gap height={10} />
        <View style={styles.wrapperIntruksi}>
          <Icon name="dot-circle" color="#4c2a86" size={18} />
          <Gap width={10} />
          {type === 'phone' ? (
            <Text>Ubah nomor ponsel anda</Text>
          ) : (
            <Text>Ubah email anda</Text>
          )}
        </View>
        <View style={styles.gap}>
          <Gap color="#0BCAD4" height={40} width={3} />
        </View>
        <View style={styles.wrapperIntruksi}>
          <Icon name="dot-circle" color="#4c2a86" size={18} />
          <Gap width={10} />
          <Text>Lakukan login ulang</Text>
        </View>
      </View>
      <View style={styles.wrapperButton}>
        <Button onPress={onSubmit} title="SIMPAN" />
      </View>
    </View>
  );
};

export default EditProfileDetail;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  wrapperImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  picture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  textGreen: {
    color: '#0BCAD4',
  },
  textInput: color => ({
    borderBottomWidth: 1,
    borderBottomColor: color,
    paddingLeft: 0,
    paddingBottom: 0,
  }),
  wrapperProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  wrapperButton: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  textTitle: {
    fontWeight: 'bold',
    color: '#4c2a86',
  },
  wrapperIntruksi: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gap: {
    paddingLeft: 7,
    paddingVertical: 2,
  },
});
