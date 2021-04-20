import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import Images from '../Theme/Images';
import ToggleSwitch from 'toggle-switch-react-native';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ServiceScreenStyle';
import Color from '../Theme/Color';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Swipeout from 'react-native-swipeout';
import Point from '../Theme/img/point.svg';

const FLatlistItem = ({shop_name, role, point, avata, level}) => {
  return (
    <View style={styles.viewItem}>
      <View style={styles.viewImage}>
        <Image
          source={avata}
          style={{width: 50, height: 50, borderRadius: 999}}
        />
      </View>
      <View style={{marginLeft: 10, flex: 1}}>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text
              style={[styles.title, {fontWeight: 'bold'}]}
              numberOfLines={1}>
              {shop_name} -{' '}
            </Text>
            <Text style={styles.text}>{role}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text
              style={[styles.title, {fontWeight: 'bold'}]}
              numberOfLines={1}>
              {level} -{' '}
            </Text>
            <Text style={styles.text}>{`${point} điểm`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const AccumulatePointDetail = (props) => {
  const data = [
    {
      title: 'Tích điểm tại VM_27 ngo 165 Xuan...',
      time: '18/12/2019 - 14:46',
      status: 2,
      amount: '+200 điểm',
    },
    {
      title: 'Thanh toán đơn hàng #AHQ123...',
      time: '16/12/2019 - 13:46',
      status: 1,
      amount: '-120 điểm',
    },
    {
      title: 'Thanh toán đơn hàng #AHQ123...',
      time: '18/12/2019 - 14:46',
      status: 0,
      amount: '-120 điểm',
    },
  ];
  return (
    <View style={styles.container}>
      <FLatlistItem
        shop_name="Shop Giatien"
        role="Khách hàng"
        level="Vip"
        avata={Images.logoGiaTien}
        point={200}
      />
      <View style={{padding: 15}}>
        <Text style={{fontSize: 14, fontWeight: '700', marginBottom: 15}}>
          Lịch sử tích điểm
        </Text>
        {data.map((item) => (
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingTop: 10,
              paddingBottom: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 5.46,
              elevation: 4,
              backgroundColor: 'white',
              borderRadius: 10,
              // marginRight: 15,
              width: Dimensions.get('window').width * 0.95,
              // marginLeft: 15,
              paddingRight: 5,
              marginBottom: 10,
              
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
                  borderRadius: 100,
                }}>
                <Point width={25} height={25} />
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
    </View>
  );
};

export default AccumulatePointDetail;
