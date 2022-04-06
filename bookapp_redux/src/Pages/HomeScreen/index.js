import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Facebook} from '../../Assets';
import {Rating, AirbnbRating} from 'react-native-ratings';
import { useDispatch, useSelector } from 'react-redux';
import { getDataBooks } from '../../redux';

const HomeScreen = ({navigation}) => {
  // const isLoading = useSelector(state => state.appData.isLoading);
  const user  = useSelector(state => {
    console.log('State: ', state.appData.user);
    return state.appData.user;
  });
  const books = useSelector(state => {
    console.log('State: ', state.appData.books);
    return state.appData.books;
  })
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(user.tokens.access.token);
    console.log('book', books);
    dispatch(getDataBooks(user.tokens.access.token))
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {books.map(book => (
      <Text>{book.title}</Text>
      // <Icon name="rocket" size={30} color="#900" />
      // <Facebook />
      // <Rating
      //   showRating
      //   // onFinishRating={this.ratingCompleted}
      //   style={{paddingVertical: 10}}
      // />
      ))}
    </View>
  )
}

export default HomeScreen