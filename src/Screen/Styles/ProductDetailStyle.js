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
    color: Color.main,
    fontFamily: 'Nunito',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});
