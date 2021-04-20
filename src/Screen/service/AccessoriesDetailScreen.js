import React, {useEffect, useState, useRef} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from '../Styles/ProductDetailStyle';
import Images from '../../Theme/Images';
import Color from '../../Theme/Color';
import RBSheet from 'react-native-raw-bottom-sheet';
import Swiper from 'react-native-swiper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import services from '../../Redux/Service/service';
import storage from './../asyncStorage/Storage';

const Content = ({title, content}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{title}</Text>
      <Text style={[styles.text, {color: Color.main}]}> {content}</Text>
    </View>
  );
};

const ProductDetail = (props) => {
  const refRBSheet = useRef();
  const [checkBTS, setCheckBTS] = useState(0);
  const [typeSelected, setTypeSelected] = useState(0);
  const [numberProduct, setNumberProduct] = useState(1);

  const [data, setdata] = useState([]);

  const service_param = props?.route?.params?.service_param || null;

  const [isLoading, setIsLoading] = useState(true);

  const [dataCart, setDataCart] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const res = await services.getListServiceDetail(service_param);
  //     setdata(res.data.data);
  //     // console.log(res.data.data);
  //   })();
  // }, []);

  useEffect(() => {
    services
      .getListServiceDetail(service_param)
      .then(function (response) {
        // props.onGetList(response?.data);
        if (response) {
          // console.log(response);
          if (response.data.status_code === 200) {
            setdata(response.data.data);
          }
        } else {
          Alert.alert('Thông báo!', 'Lỗi!', [{text: 'Đồng ý'}]);
          return;
        }
      })
      .then(function () {
        setIsLoading(false);
      });

    storage.getItem('dataCart').then((data) => {
      // console.log(data);
      if (data) {
        setDataCart(data);
      } else {
      }
    });
  }, []);

  // console.log(service_param);

  return (
    <View style={checkBTS === 0 ? styles.container : styles.containerHint}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {isLoading && <ActivityIndicator size="large" color={Color.main} />}
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{padding: 15}}>
        <View>
          {/* <View style={{alignItems: 'center'}}>
            <Image
              source={{uri: dataProductDetail.image}}
              style={{height: 200, width: 200}}
            />
          </View> */}
          <Swiper
            style={{height: 250}}
            loop={false}
            showsButtons={false}
            activeDotColor={Color.main}>
            <View
              testID="Hello"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: '#9DD6EB',
                height: 250,
                width: '100%',
              }}>
              <Image
                // source={dataProductDetail.image}
                // resizeMode="contain"
                source={{uri: data.image}}
                style={{height: 250, width: 200}}
              />
            </View>
          </Swiper>
          <View
            style={[
              styles.row,
              {
                borderBottomWidth: 1,
                borderBottomColor: '#11111150',
                paddingBottom: 10,
              },
            ]}>
            <Text style={[styles.title, {color: '#111', flex: 1}]}>
              {data?.title}
            </Text>
            {/* <TouchableOpacity
              onPress={() => props.navigation.navigate('CartScreen')}>
              <Image source={Images.addOrder} />
            </TouchableOpacity> */}
          </View>
          <Content title="Danh mục:" content={data?.category_name} />
          {/* <Content title="Số lượng:" content={dataProductDetail.number} /> */}
          <Content
            title="Giá bán:"
            content={styles.dynamicSort(data?.price) + ' đ'}
          />
          <Content
            title="Giá khuyến mãi:"
            content={styles.dynamicSort(data?.price_sale) + ' đ'}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              alignItems: 'center',
            }}>
            <View style={{height: 35, marginRight: 10}}>
              <Content
                title="Số lượng:"
                // content={styles.dynamicSort(dataProductDetail.amount)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() =>
                  numberProduct <= 1
                    ? null
                    : setNumberProduct(numberProduct - 1)
                }
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: '#F0E9E9',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons name={'remove'} size={20} color={Color.price} />
              </TouchableOpacity>
              <Text style={{fontSize: 20, marginLeft: 30, marginRight: 30}}>
                {numberProduct}
              </Text>
              <TouchableOpacity
                onPress={() => setNumberProduct(numberProduct + 1)}
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: '#F0E9E9',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <MaterialIcons name={'add'} size={20} color={Color.price} />
              </TouchableOpacity>
            </View>
          </View>
          {/* <Text
            style={{
              color: 'black',
              marginTop: 20,
              fontWeight: '700',
              fontSize: 15,
              borderBottomWidth: 1,
              borderBottomColor: '#11111150',
              paddingBottom: 10,
            }}>
            Thông số kỹ thuật
          </Text> */}
          {/* <Content
            title="Công nghệ màn hình:"
            content={data.attribute.monitors}
          /> */}
          {/* <Content title="Hệ điều hành:" content={data.attribute.system} />
          <Content title="Camera:" content={data.attribute.camera} />
          <Content title="CPU:" content={data.attribute.cpu} />
          <Content title="Ram:" content={data.attribute.ram} />
          <Content title="Bộ nhớ trong:" content={data.attribute.rom} />
          <Content title="Dung lượng pin:" content={data.attribute.battery} /> */}
          <Text
            style={{
              color: 'black',
              marginTop: 20,
              fontWeight: '700',
              fontSize: 15,
              borderBottomWidth: 1,
              borderBottomColor: '#11111150',
              paddingBottom: 10,
            }}>
            Giới thiệu
          </Text>
          <Text style={{color: 'black', fontSize: 14, marginTop: 10}}>
            {data.description}
          </Text>
          <Text style={[styles.text, {marginTop: 10, marginBottom: 25}]}>
            {data.content}
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            'Thông báo!',
            'Bạn chắc chắn thêm sản phẩm này vào giỏ hàng?',
            [
              {text: 'Hủy'},
              {
                text: 'Đồng ý',
                onPress: () => {
                  dataCart.unshift({
                    data: data,
                    product_amount: numberProduct,
                  });
                  console.log(dataCart);
                  storage.setItem('dataCart', dataCart);
                  props.navigation.navigate('CartScreen');
                },
              },
            ],
          );
        }}
        // onPress={() => refRBSheet.current.open()}
        style={{
          width: '100%',
          height: 50,
          backgroundColor: Color.main,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetail;
