import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { CARD_COLOR } from '../../../utils/constant'

// rest mengumpulkan semua props yang belum didefinisikan dengan nama props rest
const Input = ({placeholder, ...rest}) => {
  return <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor='#ffffff' {...rest}/>
}

export default Input

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: CARD_COLOR,
    borderRadius: 15,
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 15
  }
})