import {faShoppingCart, faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {Text, View, Alert} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Color from '../../Theme/Color';
import styles from '../Styles/ServiceDetailStyle';
import services from '../../Redux/Service/userService';

const Feedback = (props) => {
  const [feedback, setFeedback] = useState('');

  return (
    <View style={styles.container}>
      <View style={{padding: 10, alignItems: 'center'}}>
        <Text style={{fontSize: 14, fontWeight: '700', marginBottom: 25}}>
          Phản hồi ý kiến của bạn đến cửa hàng
        </Text>
        <TextInput
          placeholder="Viết đánh giá"
          numberOfLines={5}
          multiline={true}
          style={{
            borderWidth: 1,
            width: 350,
            height: 110,
            justifyContent: 'flex-start',
            textAlignVertical: 'top',
            // marginVertical: 15,
            borderRadius: 10,
            padding: 10,
          }}
          onChangeText={(text) => setFeedback(text)}
          value={feedback}
        />

        <TouchableOpacity
          onPress={() => {
            var body = {
              store_star: 5,
              staff_star: 5,
              evaluate: feedback,
            };
            services.sendFeedback(body).then(function (response) {
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
                Alert.alert('Thông báo!', 'Gửi phản hồi thất bại!', [
                  {text: 'Đồng ý'},
                ]);
                return;
              }
            });
          }}
          style={{
            width: 92,
            height: 40,
            backgroundColor: Color.main,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            marginTop: 10,
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
                fontSize: 16,
              }}>
              Gửi
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Feedback;
