import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
// import styles from '../Recommended/style'
import { moderateScale } from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { PRIMARY_TEXT, SECOND_COLOR } from '../../../utils/constant';

const PopularBooks = data => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      {/* {data.data?.map(item => ( ))} */}
      
      {/* <Text style={styles.title}>Latest Upload</Text> */}
      <View style={styles.popularBooks}>
      {data.data?.map(item => (
        <TouchableOpacity style={styles.bookInfo} onPress={() => navigation.navigate('Detail', {id: item.id})}>
          <Image style={styles.bookCover} source={{ uri: item.cover_image }}/>
          <Text style={styles.bookTitle}>{item.title}</Text>
          <Text style={styles.priceBook}>{item.author}</Text>
          <Text style={styles.priceBook}>{item.publisher}</Text>
          <Text style={styles.priceBook}>{item.average_rating} <Icon name='star' color='#fd9210'/></Text>
          <Text style={styles.priceBook}>Rp. {item.price}</Text>
        </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  popularBooks: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: '100%',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  bookInfo: {
    maxWidth: moderateScale(110),
    marginBottom: moderateScale(20)
  },
  bookCover: {
    width: moderateScale(110),
    height: moderateScale(175),
    borderRadius: moderateScale(8)
  },
  bookTitle: {
    // textAlign: 'center',
    paddingLeft: moderateScale(3),
    marginTop: moderateScale(5),
    color: PRIMARY_TEXT,
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
  priceBook: {
    // textAlign: 'center',
    paddingLeft: moderateScale(3),
    color: '#ffffff',
    fontSize: moderateScale(12),
  },
 })
export default PopularBooks