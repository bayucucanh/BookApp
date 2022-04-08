import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR} from '../../../utils/constant';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import ShareSocial from 'react-native-share';
import { notification } from '../Notification';

const Synopsis = ({data}) => {

  const onShare = async () => {

    const shareOptions = {
      message: `Get the book ${data.title} only at the following link ${data.cover_image}`,
    };

    try {
      await ShareSocial.open(shareOptions);
    } catch (err) {
      console.log('Error => ', err);
    }
  };

  const clickNotification = () => {
    notification.configure();
    notification.createChannel("1")
    notification.sendNotification("1", 'Notification', `you like books ${data.title}`);
  }

  console.log(data);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>Synopsis</Text>
        <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity style={styles.button} onPress={clickNotification}>
            <MaterialIcon name='favorite' size={30} color='red'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onShare}>
            <Icon name='share-alt' size={30} color='#1a89da'/>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.bookSynopsis}>
        {data.synopsis}
      </Text>
    </View>
  );
};

export default Synopsis;

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 12,
    marginTop: -20,
    padding: 20,
  },
  title: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  bookSynopsis: {
    color: '#ffff',
    lineHeight: 20,
    textAlign: 'justify'
  },
  button: {
    marginRight: 15
  }
});
