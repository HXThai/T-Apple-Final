import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {Image, Text, View, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Images from '../../Theme/Images';
import styles from '../Styles/ServiceDetailStyle';
import services from '../../Redux/Service/userService';
import HTML from 'react-native-render-html';

const Warranty = () => {
  const [dataWarranty, setDataWarranty] = useState('');

  const contentWidth = useWindowDimensions().width;

  useEffect(() => {
    services.getWarranty(null).then(function (response) {
      if (response) {
        if (response.data.status_code === 200) {
          setDataWarranty(response.data.data.content);
        }
      } else {
        Alert.alert('Thông báo!', 'Lỗi!', [{text: 'Đồng ý'}]);
        return;
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{padding: 15}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{width: '100%', borderBottomWidth: 1, marginBottom: 10}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                marginBottom: 10,
                alignItems: 'center',
              }}>
              Chính sách bảo hành
            </Text>
          </View>

          <Text style={{color: 'black', fontSize: 14}}>
            <HTML source={{html: dataWarranty}} contentWidth={contentWidth} />
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Warranty;
