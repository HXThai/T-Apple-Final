import {faShoppingCart, faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Color from '../../Theme/Color';
import styles from '../Styles/ServiceDetailStyle';

const Feedback = (props) => {
  return (
    <View style={styles.container}>
      <View style={{padding: 15, alignItems: 'center'}}>
        <Text style={{fontSize: 14, fontWeight: '700', marginBottom: 25}}>
          Đánh giá dịch vụ đang sử dụng
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
            marginVertical: 15,
            borderRadius: 10,
          }}
        />

        <TouchableOpacity style={{}}>
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
                  // fontFamily: 'Nunito',
                  fontSize: 16,
                }}>
                Gửi
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Feedback;
