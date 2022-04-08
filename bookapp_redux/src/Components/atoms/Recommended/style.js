import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ 
  wrapper: {
    width: 120,
    marginRight: 12,
    // flexDirection: 'row'
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: '#ffffff',
    marginVertical: 17
  },
  bookCover: {
    width: 120,
    height: 175,
    borderRadius: 8
  },
  bookTitle: {
    // textAlign: 'center',
    paddingLeft: 3,
    marginTop: 5,
    color: '#ffffff',
    fontSize: 15
  },
  priceBook: {
    // textAlign: 'center',
    paddingLeft: 3,
    color: '#ffffff',
    fontSize: 12
  },
})

export default styles