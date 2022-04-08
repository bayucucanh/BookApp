import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  PRIMARY_COLOR,
  PRIMARY_TEXT,
  SECOND_COLOR,
} from '../../../utils/constant';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import IconFontAwasome from 'react-native-vector-icons/dist/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {notification} from '../Notification';
import NumberFormat from 'react-number-format';

const Header = ({data}) => {
  const navigation = useNavigation();

  const clickNotification = () => {
    notification.configure();
    notification.createChannel('1');
    notification.sendNotification(
      '1',
      'Buy Success',
      `you have successfully purchased a book ${data.title}`,
    );
  };
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
          <View style={styles.bookInfoDetail}>
            <Text style={styles.dataInfo}>
              {data.average_rating}{' '}
              <IconFontAwasome name="star" color={SECOND_COLOR} />
            </Text>
            <Text style={styles.titleInfo}>Rating</Text>
          </View>
          <View style={styles.bookInfoDetail}>
            <Text style={styles.dataInfo}>{data.total_sale}</Text>
            <Text style={styles.titleInfo}>Total Sale</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.buttonBuy}
              onPress={clickNotification}>
              <NumberFormat
                value={data.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'Rp '}
                renderText={value => (
                  <Text style={styles.priceBook}>Buy {value}</Text>
                )}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => navigation.goBack()}>
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
  bookInfoDetail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 2,
    justifyContent: 'center',
    padding: 5,
  },
  buttonBuy: {
    width: '100%',
    height: '70%',
    backgroundColor: SECOND_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
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
    position: 'absolute',
    top: 5,
    left: 5,
  },
  titleInfo: {
    color: SECOND_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dataInfo: {
    color: PRIMARY_TEXT,
    textAlign: 'center',
  },
  priceBook: {
    color: 'white', fontWeight: 'bold'
  }
});
