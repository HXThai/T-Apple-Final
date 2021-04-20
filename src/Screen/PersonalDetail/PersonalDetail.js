// Styles
import styles from '../Styles/SplashScreenStyles';

import React, {useEffect} from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from 'react-native';
import Images from '../../Theme/Images';
import PhotoCamera from '../../Theme/img/photo-camera.svg';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCamera,
  faEnvelope,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faPhoneAlt,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import Color from '../../Theme/Color';

const PersonalDetail = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          // flex: 1,
          backgroundColor: '#FFFFFF',
          flexDirection: 'column',
        }}>
        <View
          style={{
            padding: 15,
            alignItems: 'center',
            marginBottom: 10,
            paddingBottom: 120,
          }}>
          <ScrollView style={{width: '100%', marginBottom: 10}}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity>
                <View style={{width: 90, height: 90}}>
                  <Image
                    style={{width: 89, height: 89, borderRadius: 100}}
                    source={Images.imgNotifi}
                    resizeMode="center"
                  />
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      backgroundColor: '#EEEEEE',
                      width: 31,
                      height: 31,
                      borderRadius: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <FontAwesomeIcon
                      color="#898989"
                      icon={faCamera}
                      size={20}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  borderBottomWidth: 1,
                  padding: 17,
                  marginBottom: 25,
                  marginTop: 25,
                }}>
                <View style={{position: 'absolute', bottom: 15, left: 15}}>
                  <FontAwesomeIcon
                    color="#898989"
                    icon={faUserEdit}
                    size={25}
                  />
                </View>

                <TextInput
                  style={{
                    width: '100%',
                    fontSize: 14,
                    textAlignVertical: 'center',
                    position: 'absolute',
                    bottom: 0,
                    left: 50,
                  }}
                  value="Xuân Thái"
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  borderBottomWidth: 1,
                  padding: 17,
                  marginBottom: 25,
                }}>
                <View style={{position: 'absolute', bottom: 15, left: 15}}>
                  <FontAwesomeIcon
                    color="#898989"
                    icon={faMapMarkerAlt}
                    size={25}
                  />
                </View>
                <TextInput
                  style={{
                    width: '100%',
                    fontSize: 14,
                    textAlignVertical: 'center',
                    position: 'absolute',
                    bottom: 0,
                    left: 50,
                  }}
                  value="Mỹ Đình, Hà Nội"
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  borderBottomWidth: 1,
                  padding: 17,
                  marginBottom: 25,
                }}>
                <View style={{position: 'absolute', bottom: 15, left: 15}}>
                  <FontAwesomeIcon
                    color="#898989"
                    icon={faPhoneAlt}
                    size={25}
                  />
                </View>
                <TextInput
                  style={{
                    width: '100%',
                    fontSize: 14,
                    textAlignVertical: 'center',
                    position: 'absolute',
                    bottom: 0,
                    left: 50,
                  }}
                  value="098.783.5699"
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  borderBottomWidth: 1,
                  padding: 17,
                  marginBottom: 25,
                }}>
                <View style={{position: 'absolute', bottom: 15, left: 15}}>
                  <FontAwesomeIcon
                    color="#898989"
                    icon={faEnvelope}
                    size={25}
                  />
                </View>
                <TextInput
                  style={{
                    width: '100%',
                    fontSize: 14,
                    textAlignVertical: 'center',
                    position: 'absolute',
                    bottom: 0,
                    left: 50,
                  }}
                  value="yangyo@gmail.com"
                />
              </View>

              <TouchableOpacity>
                <View
                  style={{
                    width: 92,
                    height: 40,
                    backgroundColor: Color.main,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
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
                        fontFamily: 'Nunito',
                        fontSize: 16,
                      }}>
                      Lưu
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PersonalDetail;
