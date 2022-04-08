import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDetailBooks} from '../../redux';
import Header from '../../Components/atoms/Header';
import {PRIMARY_COLOR} from '../../utils/constant';
import Synopsis from '../../Components/atoms/Synopsis';

const Detail = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {id} = route.params;

  const book = useSelector(state => {
    console.log('Book: ', state.appData.bookDetail);
    return state.appData.bookDetail;
  });
  const user = useSelector(state => {
    console.log('State: ', state.appData.user);
    return state.appData.user;
  });

  useEffect(() => {
    dispatch(getDetailBooks(id, user.tokens.access.token));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header data={book}/>
        <Synopsis data={book}/>
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
});
