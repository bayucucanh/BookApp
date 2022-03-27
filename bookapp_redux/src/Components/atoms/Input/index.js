import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

// rest mengumpulkan semua props yang belum didefinisikan dengan nama props rest
const Input = ({placeholder, ...rest}) => {
  return <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor='blue' {...rest}/>
}

export default Input

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 25,
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 18,
    color: 'blue',
    marginBottom: 10
  }
})