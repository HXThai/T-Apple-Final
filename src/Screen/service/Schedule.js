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
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/OrderStyle';
import Images from '../../Theme/Images';
import Color from '../../Theme/Color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FLatlistItem = ({name, image, amount, pro, number}) => {
  return (
    <View style={{marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
      <View style={{height: 60, width: 60}}>
        <Image source={{uri: image}} style={{width: '100%', height: '100%'}} />
      </View>
      <View style={{flex: 1, marginLeft: 5, justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.title} numberOfLines={1}>{name}</Text>
          <TouchableOpacity>
            <Image source={Images.binIcon} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 8,
          }}>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>
            {styles.dynamicSort(amount - amount * pro)}
          </Text>
          <Text
            style={[
              styles.text,
              {textDecorationLine: 'line-through', fontSize: 12},
            ]}>
            {styles.dynamicSort(amount)}
          </Text>
          <Text style={styles.text}>{number}</Text>
        </View>
      </View>
    </View>
  );
};

const Schedule = (props) => {
  const [check, setCheck] = useState(0);
  const [note, setNote] = useState('');
  const [shopname, setShopname] = useState('');
  const [data, setData] = useState({
    name: 'Củ quả (SHM 22)',
    shop_name: 'Lê Đức Thọ',
    product: [
      {
        id: 1,
        name: 'Thay pin Iphone 11',
        image:
          'https://vietmystore.vn/storage/san-pham/iphone12/iphone-12-pro-family-hero-all.jpeg',
        amount: 31000000,
        pro: 0.12,
        number: 2,
      },
    ],
    address: 'Mỹ Đình, Hà Nội',
    phone: '0987654321',
  });
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.views}>
          <Text style={styles.title}>{data.name}</Text>
        </View>

        <View style={styles.views}>
          <Text style={styles.text}>Đặt lịch</Text>
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
          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: Color.main,
              justifyContent: 'center',
              alignItems: 'center',
              height: 35,
              marginLeft: '50%',
              borderRadius: 10,
            }}>
            <Text style={[styles.text, {color: '#fff'}]}>+ Thêm dịch vụ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.views}>
          <View style={styles.row}>
            <Text style={styles.title}>Tổng số lượng:</Text>
            <Text style={styles.title}>1</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Tổng tiền:</Text>
            <Text style={[styles.title, {fontWeight: 'bold'}]}>
              {styles.dynamicSort(3000000)}đ
            </Text>
          </View>
        </View>

        <View style={styles.views}>
          <View style={styles.row}>
            <Text style={styles.text}>Hôm nay, 01.02.2020 09:35</Text>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: Color.main,
                justifyContent: 'center',
                alignItems: 'center',
                height: 35,
                borderRadius: 10,
              }}>
              <Text style={[styles.text, {color: '#fff'}]}>Chọn ngày</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewInput}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              Nhận hàng tại shop
            </Text>
            <TextInput
              style={styles.input}
              defaultValue={data.shop_name}
              // onChangeText={(text) => setShopname(text)}
              // value={shopname}
            />
          </View>
          <View style={styles.viewInput}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              Nhận hàng tại shop
            </Text>
            <TextInput
              style={styles.input}
              defaultValue={data.address}
              // onChangeText={(text) => setShopname(text)}
              // value={shopname}
            />
          </View>
          <View style={styles.viewInput}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              Nhận hàng tại shop
            </Text>
            <TextInput
              style={styles.input}
              defaultValue={data.phone}
              // onChangeText={(text) => setShopname(text)}
              // value={shopname}
            />
          </View>
        </View>

        <View style={styles.views}>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>
            Phương thức thanh toán
          </Text>
          <View style={(styles.row, {marginTop: 5})}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => {
                setCheck(0);
              }}>
              {check === 1 ? (
                <MaterialIcons
                  name={'radio-button-unchecked'}
                  size={20}
                  color={Color.main}
                />
              ) : (
                <MaterialIcons
                  name={'radio-button-checked'}
                  size={20}
                  color={Color.main}
                />
              )}

              <Text style={styles.text}> Thẻ ví điện tử</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}
              onPress={() => {
                setCheck(1);
              }}>
              {check === 0 ? (
                <MaterialIcons
                  name={'radio-button-unchecked'}
                  size={20}
                  color={Color.main}
                />
              ) : (
                <MaterialIcons
                  name={'radio-button-checked'}
                  size={20}
                  color={Color.main}
                />
              )}
              <Text style={styles.text}> Tiền mặt</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.text, {color: 'gray', marginTop: 5}]}>
            Số dư trong thẻ ví điện tử:
            <Text style={[styles.text, {color: 'red'}]}>
              {' '}
              {styles.dynamicSort(160000)}đ
            </Text>
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
          <View
            style={{
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ConfirmSchedule')}
              style={{
                backgroundColor: Color.main,
                justifyContent: 'center',
                alignItems: 'center',
                height:35,
                width: '100%',
                borderRadius: 10,
              }}>
              <Text style={[styles.text, {color: '#fff'}]}>Đặt mua</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Schedule;
