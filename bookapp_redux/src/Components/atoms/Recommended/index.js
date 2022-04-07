import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const Recommended = data => {
  const navigation = useNavigation();
  console.log('data recommended', data.data);
  return (
    <View>
      <Text style={styles.title}>Recommended</Text>
      <TouchableOpacity style={styles.wrapper} onPress={() => navigation.navigate('Detail')}>
        <Image style={styles.bookCover} source={{ uri: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1529766227/dilan1_rgsiyd.jpg' }}/>
        <Text style={styles.bookTitle}>Dilan Kiamat</Text>
        <Text style={styles.priceBook}>Rp. 50.000</Text>
      </TouchableOpacity>
      {/* <FlatList 
        data={data.data}
        keyExtractor={(index) => index.id}
        renderItem={({index}) => { */}
      {/* }}
      /> */}
    </View>
  );
};

export default Recommended;
