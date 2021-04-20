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

const CartScreen = (props) => {
  const [check, setCheck] = useState(0);
  const [dataProduct, setDataProduct] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    storage.getItem('dataCart').then((data) => {
      // console.log(data);
      if (data) {
        console.log(data);
        setDataProduct(data);
        var totalP = 0;
        var totalN = 0;
        data.forEach((element) => {
          // console.log(element);
          totalP += parseFloat(element.data.price_sale);
          totalN += parseFloat(element.product_amount);
        });
        // console.log(total);
        setTotalPrice(totalP);
        setTotalAmount(totalN);
      } else {
      }
    });
    // console.log(dataProduct);
    // console.log(ttp);
  }, []);

  const handleDelete = (index) => {
    // console.log(index);
    // setDataProduct(dataProduct.splice(index, 1));
    // console.log(dataProduct);
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
                elevation: 3,
                margin: 10,
              }}>
              {/* {setTotalAmount(totalAmount + item.data.price_sale)} */}
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
                      borderRadius: 20,
                      // paddingLeft: 10,
                    }}>
                    <Text style={styles.text}>{item.data.title}</Text>
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
                  <Text style={[styles.text, {fontWeight: 'bold'}]}>
                    {styles.dynamicSort(item.data.price_sale)} đ
                  </Text>

                  <Text
                    style={[
                      styles.text,
                      {textDecorationLine: 'line-through', fontSize: 12},
                    ]}>
                    {styles.dynamicSort(item.data.price)} đ
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
          onPress={() =>
            props.navigation.navigate('Order', {service_param: dataProduct})
          }>
          <Text style={[styles.title, {color: '#fff'}]}>
            Tiến hành đặt hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
