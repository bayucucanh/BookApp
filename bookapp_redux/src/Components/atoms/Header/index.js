import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {background} from '../../../Assets';
import {PRIMARY_COLOR, PRIMARY_TEXT} from '../../../utils/constant';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = ({data}) => {
  const navigation = useNavigation()
  return (
    <View>
      <ImageBackground
        style={styles.imgBackground}
        imageStyle={{opacity: 0.4}}
        source={{
          uri: data.cover_image,
        }}>
        <Image
          style={styles.bookCover}
          source={{
            uri: data.cover_image,
          }}
        />
        <View style={styles.bookDetail}>
          <Text style={styles.bookTitle}>{data.title}</Text>
          <Text style={styles.bookAuthor}>{data.author}</Text>
        </View>
        <View style={styles.bookInfo}>
          <View style={styles.rating}>
            <Text>{data.average_rating}</Text>
            <Text>Rating</Text>
          </View>
          <View style={styles.totalSale}>
            <Text style={{textAlign: 'center'}}>{data.total_sale}</Text>
            <Text style={{textAlign: 'center'}}>Total Sale</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.buttonBuy}>
              <Text style={{color: 'white'}}>Buy Rp.{data.price}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-circle" size={45} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  imgBackground: {
    height: 430,
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 0.5
  },
  bookCover: {
    width: 150,
    height: 220,
    borderRadius: 8,
    // opacity: 0.5
  },
  bookInfo: {
    width: 320,
    height: 75,
    backgroundColor: PRIMARY_COLOR,
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  rating: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalSale: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  button: {
    flex: 2,
    backgroundColor: 'pink',
    justifyContent: 'center',
    padding: 5,
  },
  buttonBuy: {
    width: '100%',
    height: '70%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookTitle: {
    color: PRIMARY_TEXT,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 7,
  },
  bookAuthor: {
    color: PRIMARY_TEXT,
    textAlign: 'center',
    fontSize: 15,
  },
  buttonBack: {
    position: 'absolute', top: 5, left: 5
  }
});
