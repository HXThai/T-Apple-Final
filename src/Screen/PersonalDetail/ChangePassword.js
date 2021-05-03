// Styles
import styles from '../Styles/SplashScreenStyles';

import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import Images from '../../Theme/Images';
import PhotoCamera from '../../Theme/img/photo-camera.svg';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEnvelope,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faPhoneAlt,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import Color from '../../Theme/Color';
import ChangePass from '../../Theme/img/change_pass.svg';

const ChangePassword = () => {
  return (
    <View style={styles.container}>
      <View style={{padding: 15, alignItems: 'center'}}>
        <View style={{width: '100%'}}>
          <TextInput
            style={{
              width: '100%',
              fontSize: 14,
              paddingLeft: 30,
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 15,
              height: 40,
            }}
            placeholder="Mật khẩu cũ"
          />
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 7,
              width: 20,
              height: 45,
              justifyContent: 'center',
            }}>
            <ChangePass width={20} height={20} />
          </View>
        </View>

        <View style={{width: '100%'}}>
          <TextInput
            style={{
              width: '100%',
              fontSize: 14,
              paddingLeft: 30,
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 15,
              height: 40,
            }}
            placeholder="Mật khẩu mới"
          />
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 7,
              width: 20,
              height: 45,
              justifyContent: 'center',
            }}>
            <ChangePass width={20} height={20} />
          </View>
        </View>

        <View style={{width: '100%'}}>
          <TextInput
            style={{
              width: '100%',
              fontSize: 14,
              paddingLeft: 30,
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 15,
              height: 40,
            }}
            placeholder="Nhập lại mật khẩu mới"
          />
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 7,
              width: 20,
              height: 45,
              justifyContent: 'center',
            }}>
            <ChangePass width={20} height={20} />
          </View>
        </View>

        <TouchableOpacity style={{marginTop: 30}}>
          <View
            style={{
              width: 120,
              height: 40,
              backgroundColor: Color.main,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              // padding: 5,
            }}>
            <View
              style={{
                flexDirection: 'column',
                height: 28,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  // fontFamily: 'Nunito',
                  fontSize: 14,
                }}>
                Đổi mật khẩu
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePassword;
