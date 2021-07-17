import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Gap from './Gap';
import PaymentCard from './PaymentCard';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: 'blue',
      height: 3,
      width: 0.5,
    }}
    style={{backgroundColor: 'white', shadowColor: '#4c2a86'}}
    tabStyle={{
      backgroundColor: '#4c2a86',
    }}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: focused ? '#fff' : '#9A9A9D',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const TopUp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Gap height={20} />
      <View>
        <PaymentCard
          onPress={() => navigation.navigate('TransferTo')}
          icon="tablet-portrait-sharp"
          name="Ke Sesama OVO"
        />
        <PaymentCard icon="ios-business" name="Ke Rekening Bank" />
      </View>
      <View style={styles.wrapperFirst}>
        <Text style={styles.titleFirst}>Transaksi Terakhir</Text>
        <Text style={styles.noTransaction}>Belum ada transaksi saat ini</Text>
      </View>
    </View>
  );
};

const Favorit = () => {
  return (
    <View>
      <Text style={styles.noTransaction}>Anda belum punya daftar Favorit</Text>
    </View>
  );
};

const renderScene = SceneMap({
  1: TopUp,
  2: Favorit,
});

const TransferBar = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Penerima Baru'},
    {key: '2', title: 'Favorit'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default TransferBar;

const styles = StyleSheet.create({
  container: {flex: 1},
  wrapperFirst: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    flex: 1,
  },
  titleFirst: {marginVertical: 15, fontSize: 18, fontWeight: 'bold'},
  noTransaction: {
    fontSize: 18,
    color: 'grey',
    textAlign: 'center',
    marginTop: 40,
  },
});
