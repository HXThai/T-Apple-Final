import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from '../Styles/ConfirmOrderStyle';
import Images from '../../Theme/Images';
import Color from '../../Theme/Color';

const FLatlistItem = ({name, image, amount, pro, number}) => {
  return (
    <View style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
      <View style={{height: 60, width: 60}}>
        <Image source={{uri: image}} style={{width: '100%', height: '100%'}} />
      </View>
      <View style={{flex: 1, marginLeft: 10, justifyContent: 'space-between'}}>
        <Text style={styles.title} numberOfLines={1}>{name}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 8,
          }}>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>
            {styles.dynamicSort(amount - amount * pro)}đ
          </Text>
          <Text
            style={[
              styles.text,
              {textDecorationLine: 'line-through', fontSize: 12},
            ]}>
            {styles.dynamicSort(amount)}
          </Text>
          <Text style={styles.text}>SL: {number}</Text>
        </View>
      </View>
    </View>
  );
};

const ConfirmSchedule = (props) => {
  const [note, setNote] = useState('');
  const [data, setData] = useState({
    name: 'Củ quả (SHM 22)',
    shop_name: 'Shop Giatien',
    product: [
      {
        id: 1,
        name: 'Thay pin Iphone 11',
        image:
          'https://file.hstatic.net/1000384805/file/dia-chi-thay-pin-uu-dai_3c2029f903634817ab016c445d1d995d_grande.jpg',
        amount: 31000000,
        pro: 0.12,
        number: 1,
      },
      {
        id: 2,
        name: 'Thay pin Iphone 12',
        image:
          'https://i1.wp.com/bachlongcare.com/wp-content/uploads/2018/06/camera-sau-x_1517628842.jpg?resize=768%2C576&ssl=1',
        amount: 31000000,
        pro: 0.12,
        number: 1,
      },
    ],
    address: 'Mỹ Đình, Hà Nội',
    phone: '0987654321',
  });
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.views}>
          <Text style={styles.title}>Thông tin shop</Text>
        </View>

        <View style={[styles.views, {flexDirection: 'row'}]}>
          <View
            style={{
              backgroundColor: '#fff',
              width: 70,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 999,
              elevation: 5,
            }}>
            <Image
              source={Images.logoGiaTien}
              style={{width: 50, height: 50, borderRadius: 999}}
            />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              {data.shop_name}
            </Text>
            <Text style={styles.text}>Tham gia 1 tuần trước</Text>
            <Text style={styles.text}>1 lần đặt tại Aborus</Text>
            <View style={styles.row}>
              <Image source={Images.gps} style={{transform: [{scale: 0.7}]}} />
              <Text style={styles.text}> {data.address}</Text>
            </View>
            <View style={styles.row}>
              <Image
                source={Images.phone}
                style={{transform: [{scale: 0.7}]}}
              />
              <Text style={styles.text}> {data.phone}</Text>
            </View>
          </View>
        </View>

        <View style={styles.views}>
          <Text style={styles.text}>Thông tin dịch vụ</Text>
          <Text style={styles.text}>Thời gian: 14h, T2,12.09.2019</Text>
          <Text style={[styles.text, {color: 'red'}]}>
            Mở cửa: 7h30 - 23h30{' '}
          </Text>
        </View>

        <View style={styles.views}>
          <Text style={styles.text}>Sản phẩm</Text>
          <FlatList
            data={data.product}
            renderItem={({item}) => (
              <FLatlistItem
                image={item.image}
                name={item.name}
                amount={item.amount}
                pro={item.pro}
                number={item.number}
              />
            )}
            // keyExtractor={id}
          />
        </View>

        <View style={(styles.views, {borderBottomWidth: null, padding: 10})}>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <Text style={styles.text}>Tổng sản phẩm</Text>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <Text style={styles.title}>Tổng tiền</Text>
            <Text style={[styles.title, {fontWeight: 'bold'}]}>
              {styles.dynamicSort(50000000)}đ
            </Text>
          </View>
          <Text style={[styles.text, {color: 'gray'}]}>
            Hình thức thanh toán:
            <Text style={[styles.text, {color: 'red'}]}> Tiền mặt</Text>
          </Text>
          <TextInput
            style={[
              styles.text,
              {
                padding: 5,
                borderColor: '#11111150',
                borderWidth: 1,
                marginTop: 10,
                textAlignVertical: 'top',
                borderRadius: 10,
              },
            ]}
            multiline={true}
            numberOfLines={5}
            placeholder="Yêu cầu đặc biệt khác"
            onChangeText={(text) => setNote(text)}
            value={note}
          />
          <TouchableOpacity
            //  onPress={()=> { props.navigation.navigate('ServiceStack', { screen: 'ServiceScreen' }) }}
            style={{
              backgroundColor: Color.main,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
              // marginBottom: 20,
              marginTop: 20,
              borderRadius: 10,
            }}>
            <Text style={[styles.text, {color: '#fff'}]}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ConfirmSchedule;
