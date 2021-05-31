// Styles
import styles from '../Styles/SplashScreenStyles';

import React, {useEffect, useState} from 'react';
import {Image, Text, View, Alert} from 'react-native';
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
import services from '../../Redux/Service/userService';

const ChangePassword = (props) => {
  const [oldPassword, setOldpassword] = useState('');

  const [newPassword, setNewpassword] = useState('');

  const [confirmNewPassword, setConfirmNewPassword] = useState('');

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
            onChangeText={(text) => setOldpassword(text)}
            value={oldPassword}
            secureTextEntry={true}
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
            onChangeText={(text) => setNewpassword(text)}
            value={newPassword}
            secureTextEntry={true}
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
            onChangeText={(text) => setConfirmNewPassword(text)}
            value={confirmNewPassword}
            secureTextEntry={true}
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

        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={() => {
            var body = {
              password_old: oldPassword,
              password_new: newPassword,
              password_new_confirmation: confirmNewPassword,
            };
            services.changePassWord(body).then(function (response) {
              if (response) {
                if (response.data.status_code === 200) {
                  Alert.alert('Thông báo!', response.data.message, [
                    {
                      text: 'Đồng ý',
                      onPress: () => {
                        props.navigation.goBack();
                      },
                    },
                  ]);
                }
              } else {
                Alert.alert('Thông báo!', 'Đổi mật khẩu thất bại!', [
                  {text: 'Đồng ý'},
                ]);
                return;
              }
            });
          }}>
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
