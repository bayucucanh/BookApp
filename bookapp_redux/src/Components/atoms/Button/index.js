import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title, onPress}) => {
  return (
    <View style={styles.wrapper.page}>
      <Text style={styles.wrapper.text.desc}>Silahkan masuk ke halaman {title}</Text>
      <TouchableOpacity style={styles.wrapper.btn} onPress={onPress}>
        <Text style={styles.wrapper.text.textBtn}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  wrapper: {
    page: {
      marginVertical: 10,
      alignItems: 'center'     
    },
    btn: {
      width: 70,
      height: 35,
      backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5
    },
    text: {
      desc: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
      },
      textBtn: {
         color: 'black',
         fontWeight: 'bold'
      }
    }
  },
})