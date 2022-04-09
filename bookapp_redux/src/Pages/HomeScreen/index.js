import {Text, View, ScrollView, StatusBar, RefreshControl, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDataBooks, refresh} from '../../redux';
import styles from './styles';
import Recommended from '../../Components/atoms/Recommended';
import PopularBooks from '../../Components/atoms/PopularBooks';
import { PRIMARY_COLOR, SECOND_COLOR } from '../../utils/constant';
import Loading from '../../Components/atoms/Loading';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const user = useSelector(state => {
    return state.appData.user;
  });
  const books = useSelector(state => {
    console.log(state.appData.books);
    return state.appData.books;
  });
  const isLoading = useSelector(state => {
    return state.appData.isLoading;
  });
  const isRefresh = useSelector(state => {
    return state.appData.isRefresh;
  });

  useEffect(() => {
    dispatch(getDataBooks(user.tokens.access.token));
  }, []);

  const Refresh = () => {
    dispatch(refresh(true))
    dispatch(getDataBooks(user.tokens.access.token));
  }

  const logout = () => {
    navigation.replace('Splash')
  }

  if(!isLoading) {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={PRIMARY_COLOR}
      />
      <ScrollView refreshControl={
        <RefreshControl refreshing={isRefresh} onRefresh={() => Refresh()}/>
      }>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.name}>Hallo, {user.user.name}</Text>
          <TouchableOpacity onPress={logout} style={{ marginTop: 10 ,borderRadius: 10,backgroundColor: SECOND_COLOR, width: 80, height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Recommended</Text>
        <Recommended data={books} key={books.id} />
        <View style={styles.popular}>
          <Text style={styles.title}>Popular Book</Text>
          <PopularBooks data={books} key={books.id} />
        </View>
      </ScrollView>
    </View>
  );
} else {
  return <Loading />
}
}

export default HomeScreen;
