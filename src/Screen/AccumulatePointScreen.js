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
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

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

const AccumulatePointScreen = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      shop_name: 'Shop Giatien',
      role: 'Khách hàng',
      point: 200,
      level: 'Vip',
      avata: Images.logoGiaTien,
    },
    {
      id: 2,
      shop_name: 'Shop Giatien',
      role: 'Khách hàng',
      point: 200,
      level: 'Vip',
      avata: Images.logoGiaTien,
    },
    {
      id: 3,
      shop_name: 'Shop Giatien',
      role: 'Khách hàng',
      point: 200,
      level: 'Vip',
      avata: Images.logoGiaTien,
    },
    {
      id: 4,
      shop_name: 'Shop Giatien',
      role: 'Khách hàng',
      point: 200,
      level: 'Vip',
      avata: Images.logoGiaTien,
    },
  ]);
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
            paddingBottom: 30,
          }}>
          <View style={{width: '100%', alignItems: 'center', padding: 10}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
              }}>{`Danh mục điểm ${data.length} shop đã liên kết`}</Text>
            <View
              style={{
                borderWidth: 1,
                width: 137,
                height: 0,
                marginTop: 10,
              }}
            />
          </View>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('AccumulatePointDetail')
                }
                style={{
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
                  marginBottom: 10,
                  width: Dimensions.get('window').width * 0.95,
                  // marginLeft: 15,
                }}>
                <FLatlistItem
                  shop_name={item.shop_name}
                  role={item.role}
                  level={item.level}
                  avata={item.avata}
                  point={item.point}
                />
              </TouchableOpacity>
            )}
            // keyExtractor={id}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AccumulatePointScreen;
