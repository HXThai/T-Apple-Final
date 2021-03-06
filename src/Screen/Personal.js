import {
  faChevronRight,
  faHistory,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Text, View, Alert} from 'react-native';
import Images from '../Theme/Images';
import Wallet from '../Theme/img/wallet.svg';
import Warranty from '../Theme/img/warranty.svg';
import Feedback from '../Theme/img/feedback.svg';
import Noti from '../Theme/img/notification.svg';
import ChangePass from '../Theme/img/change_pass.svg';
import RateApp from '../Theme/img/rate_app.svg';
import Guide from '../Theme/img/guide.svg';
import Info from '../Theme/img/info.svg';
import Share from '../Theme/img/share.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SplashScreenStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Color from '../Theme/Color';
import Modal from 'react-native-modal';

const Personal = (props) => {
  const [dataUser, setDataUser] = useState({});

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    storage.getItem('userLogin').then((data) => {
      if (data) {
        // console.log(data);
        setDataUser(data);
      } else {
      }
    });
  }, []);

  return (
    <LinearGradient
      colors={[Color.gradientStart, Color.gradientMiddle, Color.gradientEnd]}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <SafeAreaView>
        <Modal
          style={{alignItems: 'center', justifyContent: 'center'}}
          onBackdropPress={() => setModalVisible(false)}
          isVisible={modalVisible}>
          <View
            style={{
              height: '50%',
              width: '90%',
              backgroundColor: '#fff',
              borderRadius: 10,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={{fontWeight: '700', fontSize: 18}}>
              Th??ng tin li??n h???
            </Text>
            <Text></Text>
          </View>
        </Modal>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            // flex: 1,
            backgroundColor: '#FFFFFF',
            flexDirection: 'column',
            paddingBottom: 30,
          }}>
          <View style={{padding: 15}}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('PersonalDetail', {
                  dataUser: dataUser,
                });
              }}
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                borderBottomWidth: 1,
                paddingBottom: 15,
              }}>
              <View style={{flex: 1}}>
                <Image
                  style={{width: 52, height: 52, borderRadius: 100}}
                  source={{uri: dataUser.link_avatar}}
                  resizeMode="center"
                />
              </View>
              <View
                style={{flex: 5, height: 50, justifyContent: 'space-around'}}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: '#112868',
                    marginLeft: 5,
                  }}>
                  {dataUser.name}
                </Text>
                {/* <Text style={{fontSize: 14}}>Kh??ch h??ng_Vip</Text> */}
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}>
                <FontAwesomeIcon icon={faChevronRight} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Warranty');
              }}
              style={{
                flexDirection: 'row',
                // margin: 15,
                marginTop: 15,
                padding: 13,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 4,
                backgroundColor: '#fff',
                marginBottom: 10,
                marginRight: 3,
                marginLeft: 3,
                borderRadius: 6,
              }}>
              <Warranty width={20} height={20} />
              <Text style={{fontSize: 14, marginLeft: 10}}>
                Ch??nh s??ch b???o h??nh
              </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  // margin: 15,
                  marginTop: 10,
                  padding: 13,
                  elevation: 3,
                  backgroundColor: '#fff',
                  marginBottom: 10,
                  marginRight: 3,
                  marginLeft: 3,
                  borderRadius: 6,
                }}>
                <FontAwesomeIcon size={20} icon={faHistory} color="#898989" />
                <Text style={{fontSize: 14, marginLeft: 10}}>L???ch s???</Text>
              </View>
            </TouchableOpacity> */}

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ChangePassword');
              }}
              style={{
                flexDirection: 'row',
                // margin: 15,
                marginTop: 10,
                padding: 13,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 4,
                backgroundColor: '#fff',
                marginBottom: 10,
                marginRight: 3,
                marginLeft: 3,
                borderRadius: 6,
              }}>
              <ChangePass width={20} height={20} />
              <Text style={{fontSize: 14, marginLeft: 10}}>?????i m???t kh???u</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Feedback');
              }}
              style={{
                flexDirection: 'row',
                // margin: 15,
                marginTop: 10,
                padding: 13,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 4,
                backgroundColor: '#fff',
                marginBottom: 10,
                marginRight: 3,
                marginLeft: 3,
                borderRadius: 6,
              }}>
              <RateApp width={20} height={20} />
              <Text style={{fontSize: 14, marginLeft: 10}}>????nh gi?? app</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
              style={{
                flexDirection: 'row',
                // margin: 15,
                marginTop: 10,
                padding: 13,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 4,
                backgroundColor: '#fff',
                marginBottom: 10,
                marginRight: 3,
                marginLeft: 3,
                borderRadius: 6,
              }}>
              <Guide width={20} height={20} />
              <Text style={{fontSize: 14, marginLeft: 10}}>H?????ng d???n</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              onPress={() => {
                // setModalVisible(true);
              }}
              style={{
                flexDirection: 'row',
                // margin: 15,
                marginTop: 10,
                padding: 13,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 4,
                backgroundColor: '#fff',
                marginBottom: 10,
                marginRight: 3,
                marginLeft: 3,
                borderRadius: 6,
              }}>
              <Info width={20} height={20} />
              <Text style={{fontSize: 14, marginLeft: 10}}>
                Th??ng tin li??n h???
              </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
              style={{
                flexDirection: 'row',
                // margin: 15,
                marginTop: 10,
                padding: 13,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 4,
                backgroundColor: '#fff',
                marginBottom: 10,
                marginRight: 3,
                marginLeft: 3,
                borderRadius: 6,
              }}>
              <Share width={20} height={20} />
              <Text style={{fontSize: 14, marginLeft: 10}}>Chia s???</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              onPress={() => {
                Alert.alert('????ng xu???t', 'B???n ch???c ch???n mu???n ????ng xu???t?', [
                  {
                    text: '?????ng ??',
                    onPress: async () => {
                      await AsyncStorage.clear();
                      props.navigation.navigate('LoginScreen');
                    },
                  },
                  {text: 'H???y'},
                ]);
              }}
              style={{
                flexDirection: 'row',
                // margin: 15,
                marginTop: 10,
                padding: 13,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 4,
                backgroundColor: '#fff',
                marginBottom: 10,
                marginRight: 3,
                marginLeft: 3,
                borderRadius: 6,
              }}>
              <FontAwesomeIcon size={20} icon={faSignOutAlt} color="#898989" />
              <Text style={{fontSize: 14, marginLeft: 10}}>????ng xu???t</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Personal;
