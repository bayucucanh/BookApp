import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Facebook} from '../../Assets';
import {Rating, AirbnbRating} from 'react-native-ratings';
import { useDispatch, useSelector } from 'react-redux';
import { getDataBooks } from '../../redux';
import styles from './styles';
import Recommended from '../../Components/atoms/Recommended';
import LatestUpload from '../../Components/atoms/LatesUpload';

const HomeScreen = ({navigation}) => {
  // const isLoading = useSelector(state => state.appData.isLoading);
  const user  = useSelector(state => {
    console.log('State: ', state.appData.user);
    return state.appData.user;
  });
  const books = useSelector(state => {
    console.log('Books: ', state.appData.books);
    return state.appData.books;
  })
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataBooks(user.tokens.access.token))
  }, []);

  return (
    <View style={styles.container}>
      {/* {books?.map(book => (
        <View key={book.id}>
          <Text>{book.title}</Text>
        </View>
      ))} */}
      <Text style={styles.name}>Hallo, {user.user.name}</Text>
      <Recommended data={books}/>
      <LatestUpload data={books}/>
    </View>
  )
}

export default HomeScreen