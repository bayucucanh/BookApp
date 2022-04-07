import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../utils/constant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    padding: 12
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default styles