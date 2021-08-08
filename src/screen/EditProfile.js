import React, {useState} from 'react';
import {
  Image,
  Modal,
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
import {useSelector, useDispatch} from 'react-redux';
import {updateNameAndPhoto} from '../redux/action/profile';
import toastMessage from '../utils/showMessage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const EditProfile = ({navigation}) => {
  const {profile} = useSelector(state => state);
  const {token} = useSelector(state => state.authToken);
  const [name, setName] = useState(profile.profile.name);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [color, setColor] = useState('grey');
  const [photo, setPhoto] = useState(
    profile.profile.picture !== null
      ? {uri: profile.profile.picture}
      : ILDefaultUser,
  );
  const onBlur = () => {
    setColor('grey');
  };
  const onFocus = () => {
    setColor('#0BCAD4');
  };

  const addPhoto = type => {
    setModalVisible(!modalVisible);
    if (type === 'galery') {
      launchImageLibrary(
        {quality: 0.5, maxHeight: 130, maxWidth: 130},
        response => {
          if (response.didCancel) {
            toastMessage('You dont choose any photo');
          } else {
            setPhoto({uri: response.assets[0].uri});
            const dataImage = {
              uri: response.assets[0].uri,
              type: response.assets[0].type,
              name: response.assets[0].fileName,
            };
            dispatch({type: 'SET_PHOTO', payload: dataImage});
            dispatch({type: 'SET_UPLOAD_STATUS', payload: true});
          }
        },
      );
    } else {
      launchCamera({quality: 0.5, maxHeight: 130, maxWidth: 130}, response => {
        if (response.didCancel) {
          toastMessage('You dont choose any photo');
        } else {
          setPhoto({uri: response.assets[0].uri});
          const dataImage = {
            uri: response.assets[0].uri,
            type: response.assets[0].type,
            name: response.assets[0].fileName,
          };
          dispatch({type: 'SET_PHOTO', payload: dataImage});
          dispatch({type: 'SET_UPLOAD_STATUS', payload: true});
        }
      });
    }
  };

  const onSubmit = () => {
    dispatch(updateNameAndPhoto(token, name, profile));
  };
  return (
    <View style={styles.mainContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.wrapperModal}>
            <TouchableOpacity onPress={() => addPhoto('galery')}>
              <Text>Choose photo from galery</Text>
            </TouchableOpacity>
            <Gap height={20} />
            <TouchableOpacity onPress={() => addPhoto('take')}>
              <Text>Take a photo</Text>
            </TouchableOpacity>
            <Gap height={20} />
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Header title="EDIT PROFIL" />
      <View style={styles.container}>
        <View style={styles.wrapperImage}>
          <Image source={photo} style={styles.picture} />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textGreen}>Perbarui Foto Profil</Text>
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <View>
          <Text>Nama Lengkap</Text>
          <TextInput
            onBlur={onBlur}
            onFocus={onFocus}
            value={name}
            style={styles.textInput(color)}
            onChangeText={setName}
          />
        </View>
        <Gap height={20} />
        <View>
          <Text>Nomor Ponsel</Text>
          <View style={styles.wrapperProfile}>
            <Text>{profile.profile.phone}</Text>
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
            <Text>{profile.profile.email}</Text>
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
        <Button title="SIMPAN" onPress={onSubmit} />
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
  modalContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000a0',
  },
  wrapperModal: {
    backgroundColor: '#fff',
    height: 130,
    justifyContent: 'center',
    paddingLeft: 30,
  },
});
