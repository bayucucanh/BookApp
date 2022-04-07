import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import styles from '../Recommended/style'

const LatestUpload = data => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Latest Upload</Text>
      <View>
        <TouchableOpacity>
          <Image style={styles.bookCover} source={{ uri: 'https://www.adobe.com/express/create/cover/media_1b7327f720408f3da750167464f8cbcd74fa319c5.jpeg?width=400&format=jpeg&optimize=medium' }}/>
          <Text style={styles.bookTitle}>Unleash Dragon</Text>
          <Text style={styles.priceBook}>Rp. 100.000</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LatestUpload