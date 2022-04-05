import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../utils/constant";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
    marginVertical: 25,
    textAlign: 'center',
  },
  imgBg: {
    width: '100%',
    height: '45%',
    opacity: 0.5,
  },
  listInput: {
    backgroundColor: PRIMARY_COLOR,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 12,
    marginTop: -70,
    // marginBottom: 5,
  },
  btnRegister: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles