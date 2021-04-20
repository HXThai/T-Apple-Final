import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../Styles/ServiceDetailStyle';

const Wallet = (props) => {
  const data = [
    {
      title: 'Nạp tiền từ Techcombank',
      time: '18/12/2019 - 14:46',
      status: 'Thành công',
      amount: '+200,000đ',
    },
    {
      title: 'Thanh toán dịch vụ...',
      time: '16/12/2019 - 13:46',
      status: 'Thành công',
      amount: '-600,000đ',
    },
    {
      title: 'Nạp tiền từ Techcombank',
      time: '18/12/2019 - 14:46',
      status: 'Thành công',
      amount: '+200,000đ',
    },
    {
      title: 'Thanh toán dịch vụ...',
      time: '16/12/2019 - 13:46',
      status: 'Thành công',
      amount: '-600,000đ',
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#112868',
        }}>
        <Text
          style={{
            fontSize: 12,
            color: 'white',
            fontWeight: '700',
            marginBottom: 10,
          }}>
          Số dư ví
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 15,
          }}>
          1,500,000đ
        </Text>
        <View
          style={{
            width: 111,
            height: 29,
            borderWidth: 2,
            borderRadius: 15,
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 12}}>Nạp tiền</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 15}}>
          <Text style={{fontSize: 14, fontWeight: '700', marginBottom: 15}}>
            Lịch sử giao dịch
          </Text>
          {data.map((item) => (
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                paddingTop: 10,
                paddingBottom: 10,
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 4,
                backgroundColor: 'white',
                borderRadius: 10,
                // marginRight: 15,
                width: Dimensions.get('window').width * 0.95,
                // marginLeft: 15,
                paddingRight: 7,
                marginBottom: 5,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#112868',
                    width: 25,
                    height: 25,
                    borderRadius: 100,
                  }}>
                  <FontAwesomeIcon
                    color="white"
                    icon={faShoppingCart}
                    size={15}
                  />
                </View>
              </View>
              <View style={{flex: 4}}>
                <Text style={{fontSize: 14}}>{item.title}</Text>
                <Text style={{fontSize: 12}}>{item.time}</Text>
              </View>
              <View style={{flex: 2, alignItems: 'flex-end'}}>
                <Text style={{fontSize: 14}}>{item.amount}</Text>
                <Text style={{fontSize: 12, color: '#1EC803'}}>
                  {item.status}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Wallet;
