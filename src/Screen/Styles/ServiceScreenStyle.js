import {StatusBar, StyleSheet} from 'react-native';
import AppStyles from '../../Theme/AppStyles';
import Color from '../../Theme/Color';
import Metric from '../../Theme/Metric';

export default StyleSheet.create({
  ...AppStyles,
  text: {
    fontSize: 14,
    // fontFamily: 'Nunito',
    color: '#111111',
    fontStyle: 'italic',
  },
  title: {
    fontSize: 16,
    color: '#111111',
    // fontFamily: 'Nunito',
  },
  viewItem: {
    // borderBottomColor: '#11111150',
    elevation: 3,
    // borderBottomWidth: 1,
    margin: 2,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 4,
  },
  viewImage: {
    backgroundColor: '#fff',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
