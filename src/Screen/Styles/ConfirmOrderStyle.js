import {StyleSheet} from 'react-native';
import AppStyles from '../../Theme/AppStyles';
import Color from '../../Theme/Color';
export default StyleSheet.create({
  ...AppStyles,
  text: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Nunito',
    color: '#111111',
  },
  title: {
    fontSize: 16,
    color: '#111111',
    fontFamily: 'Nunito',
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  views: {
    padding: 10,
    borderBottomColor: '#11111150',
    borderBottomWidth: 1,
  },
});
