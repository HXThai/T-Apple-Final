import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import Images from '../Theme/Images';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SplashScreenStyles';

const SplashScreen = (props) => {
  useEffect(() => {
    setTimeout(() => {
      // props.navigation.navigate('LoginScreen');
      storage.getItem('userLogin').then((data) => {
        if (data) {
          props.navigation.navigate('TabNav');
          props.navigation.reset({
            index: 0,
            routes: [{name: 'TabNav'}],
          });
        } else {
          props.navigation.navigate('LoginScreen');
        }
      });
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image
        source={Images.splashScreen}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}
      /> */}
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
        }}></View>
      <View
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={Images.logo}
          resizeMode="cover"
          style={{width: 220, height: 220}}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
