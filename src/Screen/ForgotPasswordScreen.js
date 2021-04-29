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
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../Theme/Images';
import Color from '../Theme/Color';
import styles from './Styles/RegisterScreenStyle';
import LinearGradient from 'react-native-linear-gradient';

const ForgotPasswordScreen = (props) => {
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
                    <View>
                      <Image
                        source={Images.logo}
                        // resizeMode="contain"
                        style={{width: 120, height: 120}}
                      />
                    </View>
                  </View>
                  <View>
                    <View style={styles.textLogin}>
                      <Text style={styles.configTextLogin}>QUÊN MẬT KHẨU</Text>
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
                          placeholder="Số điện thoại"
                          placeholderTextColor="gray"
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
                          placeholder="Mật khẩu mới"
                          placeholderTextColor="gray"
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
                          placeholder="Nhập lại mật khẩu"
                          placeholderTextColor="gray"
                          secureTextEntry={true}
                        />
                      </View>
                    </View>
                    {/* <View
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <View
                        style={{
                          marginTop: 20,
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '90%',
                        }}>
                        <View
                          style={{
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              height: 40,
                              width: '100%',
                              marginTop: 5,
                              color: 'grey',
                              // opacity: 0.2,
                              borderColor: 'gray',
                              borderBottomWidth: 1,
                              borderBottomColor: 'gray',
                            }}>
                            <TextInput
                              style={{
                                height: 40,
                                color: '#000000',
                                marginLeft: 5,
                                fontFamily: 'Nunito',
                              }}
                              placeholder="76589"
                              placeholderTextColor="gray"
                            />
                          </View>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            width: '90%',
                            justifyContent: 'flex-end',
                            alignSelf: 'flex-end',
                            marginTop: 5,
                            marginLeft: '10%',
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              props.navigation.navigate('ForgotPasswordScreen');
                            }}>
                            <Text
                              style={{
                                fontSize: 14,
                                fontFamily: 'Nunito',
                                color: '#111',
                              }}>
                              Lấy mã
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        marginTop: 20,
                        alignItems: 'center',
                        width: '100%',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: '90%',
                          justifyContent: 'flex-end',
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            props.navigation.navigate('ForgotPasswordScreen');
                          }}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontFamily: 'Nunito',
                              color: '#FF0000',
                            }}>
                            mã xác thực còn 0:30
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View> */}
                    <View
                      style={{
                        width: '100%',
                        paddingTop: 40,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          props.navigation.navigate('TabNav');
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
                              XÁC NHÂN
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
                        Nếu bạn gặp khó khăn Xin vui lòng gọi{' '}
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
                          }}>
                          0987875427
                        </Text>
                      </TouchableOpacity>
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
