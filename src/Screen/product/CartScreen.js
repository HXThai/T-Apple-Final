import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/CartStyle';
import Images from '../../Theme/Images';
import Color from '../../Theme/Color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import storage from './../asyncStorage/Storage';
import reactotron from 'reactotron-react-native';

const CartScreen = (props) => {
  const [check, setCheck] = useState(0);
  const [dataProduct, setDataProduct] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    storage.getItem('dataCart').then((data) => {
      if (data) {
        reactotron.log(data);
        setDataProduct(data);
        var totalP = 0;
        var totalN = 0;
        data.forEach((element) => {
          totalP += parseFloat(
            element.data.price_sale * element.product_amount,
          );
          totalN += parseFloat(element.product_amount);
        });
        setTotalPrice(totalP);
        setTotalAmount(totalN);
      } else {
      }
    });
  }, []);

  const handleDelete = (index) => {
    Alert.alert(
      'Thông báo!',
      'Bạn chắc chắn muốn xóa sản phẩm khỏi giỏ hàng?',
      [
        {text: 'Hủy'},
        {
          text: 'Đồng ý',
          onPress: () => {
            const newData = dataProduct.filter(
              (item) => item.data.id !== index,
            );
            setDataProduct(newData);
            var totalP = 0;
            var totalN = 0;
            newData.forEach((element) => {
              // console.log(element);
              totalP += parseFloat(element.data.price_sale);
              totalN += parseFloat(element.product_amount);
            });
            // console.log(total);
            setTotalPrice(totalP);
            setTotalAmount(totalN);
            storage.setItem('dataCart', newData);
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {dataProduct.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                backgroundColor: '#fff',
                borderRadius: 6,
                margin: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 4,
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
                      borderRadius: 20,
                      // paddingLeft: 10,
                    }}>
                    <Text style={styles.text}>
                      {item.data.title} - {item.data.attribute.rom}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      handleDelete(item.data.id);
                    }}>
                    <MaterialIcons
                      name={'delete'}
                      size={24}
                      style={{color: 'red'}}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 8,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={[
                        styles.text,
                        {fontWeight: 'bold', marginRight: 5},
                      ]}>
                      {styles.dynamicSort(item.data.price_sale)} đ
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        {textDecorationLine: 'line-through', fontSize: 12},
                      ]}>
                      {styles.dynamicSort(item.data.price)} đ
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={() => {
                        if (item.product_amount > 1) {
                          var data = [...dataProduct];
                          var amount = totalAmount;
                          var price = totalPrice;
                          data[index].product_amount -= 1;
                          amount -= 1;
                          price -= parseFloat(item.data.price_sale);
                          setTotalPrice(price);
                          setTotalAmount(amount);
                          setDataProduct(data);
                        }
                      }}
                      style={{
                        backgroundColor: Color.main,
                        borderWidth: 1,
                        width: 30,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 4,
                      }}>
                      <Text style={{fontSize: 20, color: '#fff'}}>-</Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        borderColor: '#111',
                        borderWidth: 1,
                        width: 30,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 4,
                        marginHorizontal: 8,
                      }}>
                      <Text style={styles.text}>{item.product_amount}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        var data = [...dataProduct];
                        var amount = totalAmount;
                        var price = totalPrice;
                        data[index].product_amount += 1;
                        amount += 1;
                        price += parseFloat(item.data.price_sale);
                        setTotalPrice(price);
                        setTotalAmount(amount);
                        setDataProduct(data);
                      }}
                      style={{
                        backgroundColor: Color.main,
                        borderWidth: 1,
                        width: 30,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 4,
                      }}>
                      <Text style={{fontSize: 20, color: '#fff'}}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{padding: 10, borderTopColor: '#11111150', borderTopWidth: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>Số lượng hàng</Text>
          <Text style={styles.text}>{totalAmount}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>Thành tiền</Text>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>
            {styles.dynamicSort(totalPrice)} đ
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: Color.main,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
            width: '100%',
            borderRadius: 10,
          }}
          onPress={() => {
            props.navigation.navigate('Order', {service_param: dataProduct});
          }}>
          <Text style={[styles.title, {color: '#fff'}]}>
            Tiến hành đặt hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
