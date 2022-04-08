import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Facebook} from '../../Assets';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import {getDataBooks} from '../../redux';
import styles from './styles';
import Recommended from '../../Components/atoms/Recommended';
import PopularBooks from '../../Components/atoms/PopularBooks';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(state => state.appData.isLoading);
  const user = useSelector(state => {
    return state.appData.user;
  });
  const books = useSelector(state => {
    return state.appData.books;
  });

  useEffect(() => {
    dispatch(getDataBooks(user.tokens.access.token));
  }, []);

  return (
    <View style={styles.container}>
      {/* {books?.map(book => (
        <View key={book.id}>
          <Text>{book.title}</Text>
        </View>
      ))} */}
      <ScrollView>
        <Text style={styles.name}>Hallo, {user.user.name}</Text>
        <Text style={styles.title}>Recommended</Text>
        <Recommended data={books} key={books.id} />
        <View style={styles.popular}>
          <Text style={styles.title}>Popular Book</Text>
          <PopularBooks data={books} key={books.id} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
