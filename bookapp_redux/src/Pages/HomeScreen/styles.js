import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECOND_COLOR } from "../../utils/constant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    padding: 12
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: SECOND_COLOR,
    marginVertical: 17
  },
  
})

export default styles