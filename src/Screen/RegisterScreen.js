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
import services from '../Redux/Service/registerService';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import reactotron from 'reactotron-react-native';

const RegisterScreen = (props) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
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
                      <View style={{marginLeft: 20, width: 20, height: 20}}>
                        {/* <MaterialIcons
                          name={'arrow-back-ios'}
                          size={26}
                          color={null}
                        /> */}
                      </View>
                    </View>
                  </View>
                  <View>
                    <View style={styles.textLogin}>
                      <Text style={styles.configTextLogin}>????NG K??</Text>
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
                          placeholder="H??? v?? t??n"
                          placeholderTextColor="gray"
                          onChangeText={(text) => setName(text)}
                          value={name}
                        />
                      </View>
                    </View>
                    <View style={styles.phone}>
                      <View style={styles.textInput}>
                        <TextInput
                          keyboardType={'number-pad'}
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
                    {/* {phone.length < 10 ? (
                      <Text style={{color: 'red', fontStyle: 'italic'}}>
                        S??? ??i???n tho???i kh??ng ????ng!
                      </Text>
                    ) : null} */}
                    <View style={styles.password}>
                      <View style={styles.textInput}>
                        <TextInput
                          style={{
                            height: 40,
                            color: '#000000',
                            marginLeft: 5,
                            // fontFamily: 'Nunito',
                          }}
                          placeholder="M???t kh???u"
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
                          // props.navigation.navigate('TabNav');
                          const params = {
                            name: name,
                            phone: phone,
                            password: password,
                            password_confirmation: confirmPassword,
                          };
                          services.register(params).then(function (response) {
                            // props.onGetList(response?.data);
                            // reactotron.log(response);
                            if (response) {
                              reactotron.log(response);
                              if (response.data.status_code === 200) {
                                Alert.alert(
                                  'Th??ng b??o!',
                                  '?????t k?? t??i kho???n th??nh c??ng!',
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
                              Alert.alert(
                                'Th??ng b??o!',
                                '????ng k?? t??i kho???n th???t b???i!',
                                [{text: '?????ng ??'}],
                              );
                              return;
                            }
                          });
                        }}
                        style={{
                          width: '100%',
                          alignItems: 'center',
                        }}>
                        <View style={styles.button}>
                          <View
                            style={{
                              flexDirection: 'column',
                              height: 45,
                              justifyContent: 'center',
                            }}>
                            <Text
                              style={{
                                color: '#FFFFFF',
                                // fontFamily: 'Nunito',
                                fontSize: 14,
                              }}>
                              ????NG K??
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
                          textDecorationLine: 'underline',
                          textDecorationColor: 'gray',
                        }}>
                        B???n c?? t??i kho???n?{' '}
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          props.navigation.navigate('LoginScreen');
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            // fontFamily: 'Nunito',
                            color: Color.main,
                            textDecorationLine: 'underline',
                          }}>
                          ????ng nh???p{' '}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          // fontSize: 'Nunito',
                          fontSize: 14,
                          color: 'gray',
                          textDecorationLine: 'underline',
                          textDecorationColor: 'gray',
                        }}>
                        t???i ????y.
                      </Text>
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

export default RegisterScreen;
