import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Images from '../../Theme/Images';
import styles from '../Styles/ServiceDetailStyle';

const Warranty = () => {
  return (
    <View style={styles.container}>
      <View style={{padding: 15}}>
        <ScrollView>
          <View style={{width: '100%', borderBottomWidth: 1, marginBottom: 10}}>
            <Text style={{fontSize: 14, fontWeight: '700', marginBottom: 10}}>
              Thông tin thiết bị
            </Text>
            <Text style={{fontSize: 14, marginBottom: 20}}>
              iPhone 11 Pro max 256gb
            </Text>
            <Text style={{fontSize: 14, fontWeight: '700', marginBottom: 10}}>
              Hình ảnh
            </Text>
            <Image
              style={{width: '100%', minHeight: 10}}
              resizeMode="contain"
              source={Images.warranty}
            />
          </View>

          <View style={{width: '100%', borderBottomWidth: 1}}>
            <Text style={{fontSize: 14, fontWeight: '700', marginBottom: 10}}>
              Thông tin thiết bị
            </Text>
            <Text style={{fontSize: 14, marginBottom: 20}}>
              iPhone 11 Pro max 256gb
            </Text>
            <Text style={{fontSize: 14, fontWeight: '700', marginBottom: 10}}>
              Hình ảnh
            </Text>
            <Image
              style={{width: '100%', minHeight: 10}}
              resizeMode="contain"
              source={Images.warranty}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Warranty;
