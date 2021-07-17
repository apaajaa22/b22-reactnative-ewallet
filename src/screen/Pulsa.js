import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import Gap from '../components/Gap';
import PulsaBar from '../components/PulsaBar';

const Pulsa = () => {
  const [input, setInput] = useState('');
  const clearInput = () => {
    setInput('');
  };
  return (
    <View style={styles.container}>
      <Header title="Pulsa & Paket Data" />
      <View style={styles.wrapperContent}>
        <Text style={styles.title}>Telkomsel</Text>
        <Gap height={20} />
        <View>
          <Text>Nomor Ponsel</Text>
          <Gap height={5} />
          <View style={styles.wrapperPhone}>
            <TextInput
              onChangeText={e => setInput(e)}
              value={input}
              placeholder="Contoh 1234567890"
            />
            <TouchableOpacity onPress={clearInput}>
              <Icon name="close-circle" size={25} color="grey" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Gap height={10} />
      <PulsaBar phone={input} />
    </View>
  );
};

export default Pulsa;

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', flex: 1},
  wrapperContent: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
  },
  wrapperPhone: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
});
