import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Gap from '../components/Gap';
import {RNCamera} from 'react-native-camera';

class Scan extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapperCamera}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onBarCodeRead={({barcodes}) => {
              console.log(barcodes);
            }}
          />
        </View>
        <View style={styles.wrapperContent}>
          <Text style={styles.textTitle}>Bisa juga pakai</Text>
          <Gap height={20} />
          <View style={styles.wrapperMainButton}>
            <View style={styles.wrapperButton}>
              <Icon name="ios-phone-portrait-outline" size={28} />
              <Gap width={5} />
              <Text style={styles.textTitle}>Nomor HP</Text>
            </View>
            <Gap width={10} />
            <View style={styles.wrapperButton}>
              <Icon name="ios-barcode" size={28} />
              <Gap width={5} />
              <Text style={styles.textTitle}>Loyalti Code</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Scan;

const styles = StyleSheet.create({
  container: {flex: 1},
  wrapperCamera: {
    flex: 1,
    backgroundColor: 'grey',
    width: '100%',
    height: '100%',
  },
  wrapperContent: {
    height: 150,
    backgroundColor: '#fff',
    padding: 20,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  wrapperMainButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#4c2a86',
    width: 165,
  },
  preview: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
