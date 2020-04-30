import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import {BannerData} from './data/BannerData';
import Banner from './src/components/Banner/Banner';
export default function App() {
  return (
    <View style={styles.container}>
   <Header/>
    <Banner data={BannerData}/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
