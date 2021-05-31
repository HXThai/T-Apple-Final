import React, {useEffect, useState, useCallback} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  RefreshControl,
} from 'react-native';
import styles from './Styles/ServiceScreenStyle';
import Images from '../Theme/Images';
import Color from '../Theme/Color';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import services from '../Redux/Service/orderService';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const renderProduct = ({item}) => {
  return (
    <View
      style={{
        margin: 2,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 3,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          borderBottomWidth: 0.5,
          borderBottomColor: Color.main,
          paddingBottom: 8,
        }}>
        <Text>Mã đơn hàng: {item.code}</Text>
        <Text style={styles.text}>
          {item.status === 1
            ? 'Chờ xác nhận'
            : item.status === 2
            ? 'Đã xác nhận'
            : item.status === 3
            ? 'Đang giao hàng'
            : item.status === 4
            ? 'Hoàn thành'
            : 'Đã hủy'}
        </Text>
      </View>
      {item.product.map((itemProduct, index) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.3,
              borderBottomColor: Color.main,
              paddingBottom: 5,
            }}>
            <View style={styles.viewImage}>
              <Image
                source={{uri: itemProduct.image}}
                style={{width: 50, height: 50, borderRadius: 8}}
              />
            </View>
            <View
              style={{
                marginLeft: 10,
                flex: 1,
                height: 70,
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: 50,
                }}>
                <Text
                  style={[styles.title, {fontWeight: 'bold'}]}
                  numberOfLines={1}>
                  {itemProduct.title + ' - ' + itemProduct?.attribute?.rom}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>{styles.dynamicSort(itemProduct.price)} đ</Text>
                  <Text>Số lượng: {itemProduct.amount}</Text>
                </View>
              </View>
              {/* <Text style={styles.text}>{address}</Text> */}
            </View>
          </View>
        );
      })}
    </View>
  );
};

const ServiceScreen = (props) => {
  const [data, setData] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    services.oderHistory(null).then(function (response) {
      if (response) {
        if (response.data.status_code === 200) {
          setData(response?.data?.data?.data);
        }
      } else {
        Alert.alert('Thông báo!', 'Lỗi!', [{text: 'Đồng ý'}]);
        return;
      }
    });
    wait(1000).then(() => {
      setRefreshing(false);
    });
  });

  useEffect(() => {
    services.oderHistory(null).then(function (response) {
      if (response) {
        if (response.data.status_code === 200) {
          setData(response?.data?.data?.data);
        }
      } else {
        Alert.alert('Thông báo!', 'Lỗi!', [{text: 'Đồng ý'}]);
        return;
      }
    });
  }, []);

  return (
    <LinearGradient
      colors={[Color.gradientStart, Color.gradientMiddle, Color.gradientEnd]}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <SafeAreaView>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            // flex: 1,
            backgroundColor: '#FFFFFF',
            flexDirection: 'column',
            padding: 15,
            paddingBottom: 130,
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={data}
            renderItem={renderProduct}
            // keyExtractor={id}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ServiceScreen;
