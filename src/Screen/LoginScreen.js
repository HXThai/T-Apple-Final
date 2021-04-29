import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../Theme/Images';
import Color from '../Theme/Color';
import styles from './Styles/LoginScreenStyles';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Logo from '../Theme/svg/logo3.svg';
import signInService from '../Redux/Service/signInService';
import storage from '../Screen/asyncStorage/Storage';
import Modal from 'react-native-modal';

const LoginScreen = (props) => {
  const [phone, onChanePhone] = useState('0354525557');
  const [password, setPassword] = useState('password');
  const [displayPassword, setDisplayPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onLogin = (phone, password) => {
    // props.navigation.navigate('TabNav');
    // console.log(phone, '-', password);
    signInService
      .signIn({
        phone: phone.trim(),
        password: password.trim(),
      })
      .then(async function (response) {
        // console.log(response);
        if (response) {
          // console.log(response);
          if (response?.data?.status_code === 200) {
            setModalVisible(false);
            storage.setItem('dataLogin', {
              phone: phone,
              password: password,
            });
            storage.setItem('userLogin', response?.data.data);
            storage.setItem('Authorization', response?.data.data.token);
            // console.log(response?.data?.data);
            props.navigation.navigate('TabNav');
          } else {
            Alert.alert(
              'Thông báo',
              'Số điện thoại hoặc mật khẩu không chính xác!',
              [
                {
                  text: 'OK',
                  onPress: () => {
                    setModalVisible(false);
                  },
                },
              ],
              {cancelable: false},
            );
          }
        } else {
          Alert.alert(
            'Thông báo',
            'Số điện thoại hoặc mật khẩu không chính xác!',
            [
              {
                text: 'OK',
                onPress: () => {
                  setModalVisible(false);
                },
              },
            ],
            {cancelable: false},
          );
        }
      });
  };

  return (
    <LinearGradient
      colors={[Color.gradientStart, Color.gradientMiddle, Color.gradientEnd]}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <SafeAreaView>
        <Modal
          style={{alignItems: 'center', justifyContent: 'center'}}
          isVisible={modalVisible}>
          <View
            style={{
              height: 70,
              width: 70,
              backgroundColor: '#fff',
              borderRadius: 10,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size="large" color={Color.main} />
          </View>
        </Modal>
        <View style={styles.login}>
          <View style={styles.main}>
            <View style={{marginTop: 15}}>
              <Image
                source={Images.logo}
                resizeMode="cover"
                style={{width: 120, height: 120}}
              />
            </View>
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
              style={styles.login}>
              <ScrollView style={{width: '100%', marginBottom: 10}}>
                <View>
                  <View style={styles.textLogin}>
                    <Text style={styles.configTextLogin}>Đăng nhập</Text>
                  </View>
                  <View style={styles.phone}>
                    <View style={styles.textInput}>
                      <TextInput
                        style={{
                          height: 40,
                          color: '#000000',
                          // marginLeft: 5,
                          // fontFamily: 'Nunito',
                        }}
                        placeholder="Số điện thoại"
                        keyboardType="number-pad"
                        placeholderTextColor="gray"
                        onChangeText={(text) => onChanePhone(text)}
                        value={phone}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      height: 40,
                      // width: '80%',
                      marginTop: 30,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      borderBottomWidth: 0.8,
                      borderBottomColor: '#333333',
                      marginLeft: 20,
                      marginRight: 20,
                    }}>
                    <TextInput
                      style={{
                        color: '#000000',
                        // fontFamily: 'Nunito',
                        width: '87%',
                        height: 40,
                      }}
                      placeholder="Mật khẩu"
                      placeholderTextColor="gray"
                      onChangeText={(text) => setPassword(text)}
                      value={password}
                      secureTextEntry={displayPassword === true ? false : true}
                    />
                    <View
                      style={{
                        height: 40,
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => setDisplayPassword(!displayPassword)}>
                        <MaterialIcons
                          name={
                            displayPassword === true
                              ? 'visibility'
                              : 'visibility-off'
                          }
                          size={22}
                          color={'black'}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.password}>
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
                            // fontFamily: 'Nunito',
                            color: '#111',
                          }}>
                          Quên mật khẩu?
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true);
                      onLogin(phone, password);
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
                          ĐĂNG NHẬP
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>

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
                      Chưa có tài khoản?{' '}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('RegisterScreen');
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          // fontFamily: 'Nunito',
                          color: Color.main,
                        }}>
                        Đăng ký{' '}
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
                      tại đây.
                    </Text>
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

export default LoginScreen;
