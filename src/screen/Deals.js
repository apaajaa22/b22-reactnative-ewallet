import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILPromo} from '../assets';
import Gap from '../components/Gap';
import Header from '../components/Header';

const Deals = () => {
  return (
    <View>
      <Header main title="Deals" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerPromo}>
          <View style={styles.wrapperSubtitle}>
            <Text style={styles.subTitle}>Info dan Promo Spesial</Text>
            <Text style={styles.subTitleGreen}>Lihat Semua</Text>
          </View>
          <Gap height={20} />
          <Image source={ILPromo} style={styles.picturePromo} />
        </View>
        <View style={styles.containerPromo}>
          <View style={styles.wrapperSubtitle}>
            <Text style={styles.subTitle}>Info dan Promo Spesial</Text>
            <Text style={styles.subTitleGreen}>Lihat Semua</Text>
          </View>
          <Gap height={20} />
          <Image source={ILPromo} style={styles.picturePromo} />
        </View>
        <View style={styles.containerPromo}>
          <View style={styles.wrapperSubtitle}>
            <Text style={styles.subTitle}>Info dan Promo Spesial</Text>
            <Text style={styles.subTitleGreen}>Lihat Semua</Text>
          </View>
          <Gap height={20} />
          <Image source={ILPromo} style={styles.picturePromo} />
        </View>
        <Gap height={60} />
      </ScrollView>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  containerPromo: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
  },
  wrapperSubtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  subTitleGreen: {
    color: '#0BCAD4',
    fontWeight: 'bold',
    fontSize: 12,
  },
  picturePromo: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});
