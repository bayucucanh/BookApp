import {StyleSheet, StatusBar, View, ScrollView, RefreshControl} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDetailBooks, refresh} from '../../redux';
import Header from '../../Components/atoms/Header';
import {PRIMARY_COLOR} from '../../utils/constant';
import Synopsis from '../../Components/atoms/Synopsis';
import Loading from '../../Components/atoms/Loading';

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

  const isLoading = useSelector(state => {
    return state.appData.isLoading;
  });

  const isRefresh = useSelector(state => {
    console.log('refresh', state.appData.isRefresh);
    return state.appData.isRefresh;
  });

  useEffect(() => {
    dispatch(getDetailBooks(id, user.tokens.access.token));
  }, []);

  const Refresh = () => {
    dispatch(refresh(true))
    dispatch(getDetailBooks(id, user.tokens.access.token));
  }

  if(!isLoading) {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={PRIMARY_COLOR}
      />
      <ScrollView 
        refreshControl={
          <RefreshControl refreshing={isRefresh} onRefresh={() => Refresh()}/>
        }
      >
        <Header data={book}/>
        <Synopsis data={book}/>
      </ScrollView>
    </View>
  );
} else {
  return <Loading />
}
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
});
