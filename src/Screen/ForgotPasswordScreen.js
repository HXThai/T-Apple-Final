import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../Theme/Images';
import Color from '../Theme/Color';
import styles from './Styles/RegisterScreenStyle';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import services from '../Redux/Service/registerService';

const ForgotPasswordScreen = (props) => {
  const [phone, setPhone] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <LinearGradient
      colors={[Color.gradientStart, Color.gradientMiddle, Color.gradientEnd]}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
              style={styles.container}>
              <ScrollView style={{width: '100%', marginBottom: 10}}>
                <View
                  style={{
                    paddingBottom: 100,
                    marginTop: 25,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      //   paddingBottom: 100,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // alignItems: 'center',
                        width: '100%',
                      }}>
                      <TouchableOpacity
                        onPress={() => props.navigation.navigate('LoginScreen')}
                        style={{marginLeft: 20}}>
                        <MaterialIcons
                          name={'arrow-back-ios'}
                          size={26}
                          color={Color.main}
                        />
                      </TouchableOpacity>
                      <Image
                        source={Images.logo}
                        // resizeMode="contain"
                        style={{width: 120, height: 120}}
                      />
                      <View
                        style={{marginLeft: 20, width: 20, height: 20}}></View>
                    </View>
                  </View>
                  <View>
                    <View style={styles.textLogin}>
                      <Text style={styles.configTextLogin}>QU??N M???T KH???U</Text>
                    </View>
                    <View style={styles.phone}>
                      <View style={styles.textInput}>
                        <TextInput
                          style={{
                            height: 40,
                            color: '#000000',
                            marginLeft: 5,
                            // fontFamily: 'Nunito',
                          }}
                          placeholder="S??? ??i???n tho???i"
                          placeholderTextColor="gray"
                          onChangeText={(text) => setPhone(text)}
                          value={phone}
                        />
                      </View>
                    </View>
                    <View style={styles.phone}>
                      <View style={styles.textInput}>
                        <TextInput
                          style={{
                            height: 40,
                            color: '#000000',
                            marginLeft: 5,
                            // fontFamily: 'Nunito',
                          }}
                          placeholder="M???t kh???u m???i"
                          placeholderTextColor="gray"
                          secureTextEntry={true}
                          onChangeText={(text) => setPassword(text)}
                          value={password}
                        />
                      </View>
                    </View>
                    <View style={styles.password}>
                      <View style={styles.textInput}>
                        <TextInput
                          style={{
                            height: 40,
                            color: '#000000',
                            marginLeft: 5,
                            // fontFamily: 'Nunito',
                          }}
                          placeholder="Nh???p l???i m???t kh???u"
                          placeholderTextColor="gray"
                          secureTextEntry={true}
                          onChangeText={(text) => setConfirmPassword(text)}
                          value={confirmPassword}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        width: '100%',
                        paddingTop: 40,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          const params = {
                            phone: phone,
                            password: password,
                            password_confirmation: confirmPassword,
                          };
                          services
                            .forgotPassword(params)
                            .then(function (response) {
                              // props.onGetList(response?.data);
                              if (response) {
                                if (response.data.status_code === 200) {
                                  Alert.alert(
                                    'Th??ng b??o!',
                                    '?????i m???t kh???u th??nh c??ng!!',
                                    [
                                      {
                                        text: '?????ng ??',
                                        onPress: () => {
                                          props.navigation.navigate(
                                            'LoginScreen',
                                          );
                                        },
                                      },
                                    ],
                                  );
                                } else {
                                  Alert.alert(
                                    'Th??ng b??o!',
                                    response.data.message,
                                    [
                                      {
                                        text: '?????ng ??',
                                      },
                                    ],
                                  );
                                }
                              } else {
                                Alert.alert('Th??ng b??o!', 'L???i h??? th???ng!', [
                                  {text: '?????ng ??'},
                                ]);
                                return;
                              }
                            });
                        }}
                        style={{width: '100%', alignItems: 'center'}}>
                        <View style={styles.button}>
                          <View
                            style={{
                              flexDirection: 'column',
                              height: 42,
                              justifyContent: 'center',
                            }}>
                            <Text
                              style={{
                                color: '#FFFFFF',
                                // fontFamily: 'Nunito',
                                fontSize: 14,
                              }}>
                              X??C NH??N
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          // fontSize: 'Nunito',
                          fontSize: 14,
                          color: 'gray',
                          textDecorationColor: 'gray',
                        }}>
                        N???u b???n g???p kh?? kh??n Xin vui l??ng g???i 0976874192
                      </Text>
                      {/* <TouchableOpacity
                        onPress={() => {
                          props.navigation.navigate('LoginScreen');
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            // fontFamily: 'Nunito',
                            color: Color.main,
                          }}>
                          0987875427
                        </Text>
                      </TouchableOpacity> */}
                    </View>
                  </View>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ForgotPasswordScreen;
