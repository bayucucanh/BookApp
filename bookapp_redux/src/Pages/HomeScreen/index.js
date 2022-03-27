import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Facebook} from '../../Assets';
import {Rating, AirbnbRating} from 'react-native-ratings';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Icon name="rocket" size={30} color="#900" />
      {/* <Image source={facebook}  style={{ width: 200 }}/> */}
      <Facebook />
      <Rating
        showRating
        // onFinishRating={this.ratingCompleted}
        style={{paddingVertical: 10}}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})