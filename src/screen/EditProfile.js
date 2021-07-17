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

const EditProfile = ({navigation}) => {
  const [color, setColor] = useState('grey');
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
          <Image source={ILDefaultUser} style={styles.picture} />
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.textGreen}>Perbarui Foto Profil</Text>
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <View>
          <Text>Nama Lengkap</Text>
          <TextInput
            onBlur={onBlur}
            onFocus={onFocus}
            value="rahadian reza"
            style={styles.textInput(color)}
          />
        </View>
        <Gap height={20} />
        <View>
          <Text>Nomor Ponsel</Text>
          <View style={styles.wrapperProfile}>
            <Text>082212345678</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('EditProfileDetail', {type: 'phone'})
              }>
              <Text style={styles.textGreen}>Ubah</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={20} />
        <View>
          <Text>Email</Text>
          <View style={styles.wrapperProfile}>
            <Text>reza.rahadian1@email.com</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('EditProfileDetail', {type: 'email'})
              }>
              <Text style={styles.textGreen}>Ubah</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.wrapperButton}>
        <Button title="SIMPAN" />
      </View>
    </View>
  );
};

export default EditProfile;

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
});