import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const Recommended = data => {
  const navigation = useNavigation();
  console.log('data recommended', data.data);
  return (
    <View style={{flexDirection: 'row'}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {/* <Text style={styles.title}>Recommended</Text> */}
      {data.data?.map(item => (
        <View >
          <TouchableOpacity
            style={styles.wrapper}
            key={item.id}
            onPress={() => navigation.navigate('Detail', {id: item.id})}>
            <Image
              style={styles.bookCover}
              source={{
                uri: item.cover_image,
              }}
            />
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.priceBook}>{item.price}</Text>
          </TouchableOpacity>
        </View>
      ))}
      </ScrollView>
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
