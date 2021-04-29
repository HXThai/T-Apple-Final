import {StatusBar, StyleSheet, Dimensions} from 'react-native';
import AppStyles from '../../Theme/AppStyles';
import Color from '../../Theme/Color';
import Metric from '../../Theme/Metric';

export default StyleSheet.create({
  ...AppStyles,
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // flex: 1,
    backgroundColor: Color.background,
    flexDirection: 'column',
  },
  login: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  main: {
    marginTop: 30,
    alignItems: 'center',
  },
  textLogin: {
    marginTop: 30,
    alignItems: 'center',
  },
  configTextLogin: {
    // fontFamily: 'Nunito',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 25,
  },
  phone: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    marginTop: 5,
    color: 'grey',
    // opacity: 0.2,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  password: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    marginTop: 45,
    width: '90%',
    height: 42,
    backgroundColor: Color.main,
    alignItems: 'center',
    borderRadius: 8,
  },
});
