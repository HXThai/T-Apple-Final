import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/OrderStyle';
import Images from '../../Theme/Images';
import Color from '../../Theme/Color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import services from '../../Redux/Service/orderService';

const Order = (props) => {
  const [check, setCheck] = useState(1);
  const [note, setNote] = useState('');
  const [shopname, setShopname] = useState('');
  const [data, setData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [address, setAddress] = useState('');
  // const data = props?.route?.params?.service_param || null;

  useEffect(() => {
    var totalP = 0;
    var totalN = 0;
    const dataProduct = props?.route?.params?.service_param || null;
    setData(dataProduct);
    dataProduct.forEach((element) => {
      // console.log(element);
      totalP += parseFloat(element.data.price_sale);
      totalN += parseFloat(element.product_amount);
    });
    // console.log(total);
    setTotalPrice(totalP);
    setTotalAmount(totalN);

    // console.log(dataProduct);
    // console.log(ttp);
  }, []);

  const handleOrder = () => {
    var newData = [];
    data.forEach((element) => {
      var newItem = {
        product_id: element.data.id,
        product_amount: element.product_amount,
      };
      newData.push(newItem);
    });
    // console.log(newData);
    const params = {
      note: note,
      pay_method: '1',
      address: address,
      products: newData,
    };
    console.log(params);
    services.newOrder(params).then(function (response) {
      // props.onGetList(response?.data);
      if (response) {
        console.log(response);
        if (response.data.status_code === 200) {
          Alert.alert('Thông báo!', 'Đặt hàng thành công!', [
            {
              text: 'Đồng ý',
              onPress: () => {
                props.navigation.reset({
                  routes: [{name: 'OrderHistoryScreen'}],
                });
                props.navigation.navigate('Home');
              },
            },
          ]);
        }
      } else {
        Alert.alert('Thông báo!', 'Đặt hàng thất bại!', [{text: 'Đồng ý'}]);
        return;
      }
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={styles.views}>
          <Text style={styles.title}>{data.name}</Text>
        </View> */}

        <View style={styles.views}>
          {data.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{height: 60, width: 60}}>
                  <Image
                    source={{uri: item.data.image}}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    marginLeft: 5,
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        width: '90%',
                        // borderColor: '#111111',
                        // borderWidth: 1,
                        // padding: 5,
                        borderRadius: 10,
                        // paddingLeft: 10,
                      }}>
                      <Text style={styles.text}>{item.data.title}</Text>
                    </View>
                    {/* <TouchableOpacity>
            <Image source={Images.binIcon} />
          </TouchableOpacity> */}
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 8,
                    }}>
                    <Text style={[styles.text, {fontWeight: 'bold'}]}>
                      {styles.dynamicSort(item.data.price_sale)}
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        {textDecorationLine: 'line-through', fontSize: 12},
                      ]}>
                      {styles.dynamicSort(item.data.price)}
                    </Text>
                    <View
                      style={{
                        borderColor: '#111',
                        borderWidth: 1,
                        width: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 4,
                      }}>
                      <Text style={styles.text}>{item.product_amount}</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        <View style={styles.views}>
          <View style={styles.row}>
            <Text style={styles.title}>Tổng số lượng:</Text>
            <Text style={styles.title}>{totalAmount}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Tổng tiền:</Text>
            <Text style={[styles.title, {fontWeight: 'bold'}]}>
              {styles.dynamicSort(totalPrice)}đ
            </Text>
          </View>
        </View>

        <View style={styles.views}>
          <View style={styles.viewInput}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              Địa chỉ nhận hàng
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setAddress(text)}
              value={address}
            />
          </View>
        </View>

        <View style={styles.views}>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>
            Phương thức thanh toán
          </Text>
          <View style={(styles.row, {marginTop: 5})}>
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
              <Text style={styles.text}> Thanh toán khi nhận hàng</Text>
            </TouchableOpacity>
          </View>
          {/* <Text style={[styles.text, {color: 'gray', marginTop: 5}]}>
            Số dư trong thẻ ví điện tử:
            <Text style={[styles.text, {color: 'red'}]}>
              {' '}
              {styles.dynamicSort(160000)}đ
            </Text>
          </Text> */}
          <TextInput
            style={[
              styles.text,
              {
                padding: 5,
                borderColor: '#11111150',
                borderWidth: 1,
                marginTop: 15,
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
              onPress={() => {
                handleOrder();
              }}
              style={{
                backgroundColor: Color.main,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
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

export default Order;
