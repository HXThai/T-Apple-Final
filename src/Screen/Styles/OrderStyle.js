import {StyleSheet} from 'react-native';
import AppStyles from '../../Theme/AppStyles';
import Color from '../../Theme/Color';
export default StyleSheet.create({
  ...AppStyles,
  text: {
    fontSize: 14,
    fontFamily: 'Nunito',
    color: '#111111',
  },
  title: {
    fontSize: 16,
    color: '#111111',
    fontFamily: 'Nunito',
    marginLeft: 5,
    fontWeight:'bold'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  views: {
    padding: 10,
    borderBottomColor: '#11111150',
    borderBottomWidth: 1,
  },
  viewInput: {
    marginTop: 10,
  },
  input: {
    borderColor: '#11111150',
    borderWidth: 1,
    padding: 5,
    marginTop: 5,
    color: '#111111',
    borderRadius: 10,
  },
});
