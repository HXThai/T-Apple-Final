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
    marginLeft:5
  },
  row: {
    flexDirection:'row',
    alignItems:'center',
    marginTop:10
  }
});
