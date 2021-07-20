import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Gap from './Gap';
import HistoryItem from './HistoryItem';
import PaymentCard from './PaymentCard';
import {useDispatch, useSelector} from 'react-redux';
import {getHistory} from '../redux/action/profile';
import {http} from '../helpers/http';
import {API_URL} from '@env';
import {Picker} from '@react-native-picker/picker';
import {ICSearch} from '../assets';

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

const Notifikasi = () => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.authToken);
  const {history} = useSelector(state => state.profile);
  const [renderData, setRenderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedValue, setSelectedValue] = useState('id');

  const getNextPage = async () => {
    dispatch({type: 'SET_LOADING', payload: true});
    const {data} = await http(token).get(
      `${API_URL}/transaction?search=${search}&page=${currentPage}&sort[${selectedValue}]=0`,
    );
    dispatch({type: 'SET_LOADING', payload: false});
    if (currentPage > 1) {
      setRenderData([...renderData, ...data.results]);
    } else {
      setRenderData(data.results);
    }
  };
  useEffect(() => {
    getNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, currentPage, selectedValue]);

  const navigation = useNavigation();

  const loadMoreProduct = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderItem = ({item}) => {
    return (
      <HistoryItem
        notif
        date={item.createdAt}
        title={item.description}
        price={item.deductedBalance}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <View>
        <View style={styles.inputSearchWrapper}>
          <TextInput placeholder="search..." onChangeText={setSearch} />
          <TouchableOpacity onPress={getNextPage}>
            <Image source={ICSearch} />
          </TouchableOpacity>
        </View>
        <View>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Sortir" value="id" />
            <Picker.Item label="Balance" value="deductedBalance" />
            <Picker.Item label="createdAt" value="createdAt" />
          </Picker>
        </View>
      </View>
      <FlatList
        renderItem={renderItem}
        data={renderData}
        onEndReached={search.length > 1 ? null : loadMoreProduct}
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const Pesan = () => {
  return (
    <View>
      <Text style={styles.noTransaction}>Anda belum punya daftar Favorit</Text>
    </View>
  );
};

const renderScene = SceneMap({
  1: Notifikasi,
  2: Pesan,
});

const NotificationBar = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Notifikasi'},
    {key: '2', title: 'Pesan'},
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

export default NotificationBar;

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
  inputSearchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 8,
  },
});
