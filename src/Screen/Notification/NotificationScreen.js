import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/ProductStyle';
import Images from '../../Theme/Images';
import Color from '../../Theme/Color';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHistory} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import services from '../../Redux/Service/notificationService';

const NotificationScreen = (props) => {
  const [dataNotification, setDataNotification] = useState([]);
  var deviceWidth = Dimensions.get('window').width;

  // const [data, setData] = useState([]);

  useEffect(() => {
    services.getListNotification({}).then(function (response) {
      // props.onGetList(response?.data);
      if (response) {
        // console.log(response);
        if (response.data.status_code === 200) {
          // console.log(response?.data?.data?.data[0].product);
          setDataNotification(response?.data?.data?.data);
        }
      } else {
        Alert.alert('Thông báo!', 'Lỗi!', [{text: 'Đồng ý'}]);
        return;
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
        <View
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            // flex: 1,
            backgroundColor: '#FFFFFF',
            flexDirection: 'column',
            paddingBottom: 30,
            // marginBottom: 20,
          }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginBottom: 20}}>
            <View
              style={{
                width: '100%',
                borderRadius: 10,

                marginBottom: 15,
                alignItems: 'center',
                marginTop: 8,
                marginBottom: 10,
                justifyContent: 'center',
              }}>
              {dataNotification.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('NotificationDetailScreen', {
                        item: item,
                      });
                    }}
                    key={index}
                    style={{
                      margin: 10,
                      width: '94%',
                      marginBottom: 15,
                      flexDirection: 'row',
                      backgroundColor: '#fff',
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 4,
                      },
                      shadowOpacity: 0.32,
                      shadowRadius: 5.46,
                      elevation: 4,
                      marginBottom: 10,
                      borderRadius: 10,
                      height: 100,
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{uri: item.image}}
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: 10,
                        marginLeft: 5,
                      }}
                    />
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        marginLeft: 10,
                        height: 100,
                      }}>
                      <Text
                        style={[
                          {
                            color: 'black',
                            fontSize: 16,
                            fontWeight: '700',
                            width: '85%',
                          },
                        ]}
                        numberOfLines={1}>
                        {item.title}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text
                          numberOfLines={1}
                          style={[styles.text, {width: '85%'}]}>
                          {item.body}
                        </Text>
                      </View>

                      <Text
                        style={[styles.title, {color: '#111'}]}
                        numberOfLines={1}>
                        {item.created_at}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default NotificationScreen;
