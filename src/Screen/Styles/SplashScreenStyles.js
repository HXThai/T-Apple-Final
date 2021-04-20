import {StyleSheet} from 'react-native';
import AppStyles from '../../Theme/AppStyles';

export default StyleSheet.create({
  ...AppStyles,
  logoContainer: {
    position: 'absolute',
    width: 220,
    height: 220,
    zIndex: 10,
  },
  overlayContainer: {
    flex: 1,
    alignItems: 'center',
    width: 220,
    height: 220,
    zIndex: 10,
  },
});
