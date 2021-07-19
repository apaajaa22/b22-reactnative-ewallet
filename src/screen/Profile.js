import React, {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILDefaultUser} from '../assets';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Header from '../components/Header';
import ItemInfo from '../components/ItemInfo';
import {useDispatch, useSelector} from 'react-redux';
import {getProfile} from '../redux/action/profile';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.authToken);
  const {profile} = useSelector(state => state.profile);
  useEffect(() => {
    dispatch(getProfile(token));
  }, [dispatch, navigation, token]);

  const signOut = () => {
    dispatch({type: 'GET_TOKEN', payload: null});
    navigation.reset({index: 0, routes: [{name: 'GetStarted'}]});
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header sec main title="Profile" />
      <View style={styles.wrapperSection}>
        <View style={styles.profile}>
          <Image
            source={
              profile.picture !== null ? {uri: profile.picture} : ILDefaultUser
            }
            style={styles.picture}
          />
          <Gap width={20} />
          <View>
            <Text>{profile.name}</Text>
            <Text>{profile.phone}</Text>
          </View>
        </View>
      </View>
      <View style={styles.wrapperSection}>
        <Text style={styles.titleFirst}>OVO ID</Text>
      </View>
      <View style={styles.wrapperSection}>
        <Text style={styles.titleFirst}>Akun</Text>
        <ItemInfo
          onPress={() => navigation.navigate('EditProfile')}
          title="Ubah Profile"
          iconName="user-edit"
          border
        />
        <ItemInfo title="My Cards" iconName="credit-card" border />
        <ItemInfo title="Kode Promo" iconName="ticket-alt" />
      </View>
      <View style={styles.wrapperSection}>
        <Text style={styles.titleFirst}>Keamanan</Text>
        <ItemInfo title="Ubah Security Code" iconName="lock" />
      </View>
      <View style={styles.wrapperSection}>
        <Text style={styles.titleFirst}>Tentang</Text>
        <ItemInfo title="Keuntungan Pakai OVO" iconName="user-plus" border />
        <ItemInfo title="Panduan OVO" iconName="lightbulb" border />
        <ItemInfo
          title="Syarat dan Ketentuan"
          iconName="clipboard-list"
          border
        />
        <ItemInfo title="Kebijakan Privasi" iconName="shield-alt" border />
        <ItemInfo title="Pusat Bantuan" iconName="question-circle" />
      </View>
      <View style={styles.wrapperButton}>
        <Button title="Sign Out" onPress={signOut} />
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wrapperSection: {
    marginBottom: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    marginBottom: 10,
  },
  picture: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  titleFirst: {marginVertical: 15, fontSize: 18, fontWeight: 'bold'},
  wrapperButton: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
