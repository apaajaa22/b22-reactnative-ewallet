import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import HistoryItem from '../components/HistoryItem';
import {http} from '../helpers/http';
import {API_URL} from '@env';
import {Picker} from '@react-native-picker/picker';
import {ICSearch} from '../assets';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const History = () => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.authToken);
  const {history} = useSelector(state => state.profile);
  const [renderData, setRenderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedValue, setSelectedValue] = useState('id');

  const getNextPage = async () => {
    dispatch({type: 'SET_LOADING', payload: true});
    const value = selectedValue.split(' ');
    console.log(value[0]);
    const {data} = await http(token).get(
      `${API_URL}/transaction?search=${search}&page=${currentPage}&sort[${value[0]}]=${value[1]}`,
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
      <Header title="History" />
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
              <Picker.Item label="Terbaru" value="createdAt 1" />
              <Picker.Item label="Terlama" value="createdAt 0" />
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
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
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
