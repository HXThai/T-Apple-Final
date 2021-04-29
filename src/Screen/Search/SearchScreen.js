import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
  TextInput,
} from 'react-native';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/ProductStyle';
import Images from '../../Theme/Images';
import Color from '../../Theme/Color';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHistory} from '@fortawesome/free-solid-svg-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchScreen = (props) => {
  const [dataNotification, setDataNotification] = useState([
    {
      title: 'Ra mắt mẫu Iphone mới!',
      description: 'Just imagine listening ... ',
      image: Images.bannerSale,
      dateSubmit: '3 giờ trước',
    },
    {
      title: 'Ra mắt mẫu Iphone mới!',
      description: 'Just imagine listening ... ',
      image: Images.bannerSale,
      dateSubmit: '3 giờ trước',
    },
    {
      title: 'Ra mắt mẫu Iphone mới!',
      description: 'Just imagine listening ... ',
      image: Images.bannerSale,
      dateSubmit: '3 giờ trước',
    },
  ]);
  var deviceWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          // justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
          }}>
          <View
            style={{
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              position: 'absolute',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 40,
                width: '100%',
                marginTop: 5,
                color: 'grey',
                // opacity: 0.2,
                borderColor: 'gray',
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
              }}>
              <TextInput
                style={{
                  height: 40,
                  color: '#000000',
                  marginLeft: 5,
                  // fontFamily: 'Nunito',
                }}
                placeholder="Bạn cần tìm gì?"
                placeholderTextColor="gray"
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              justifyContent: 'flex-end',
              alignSelf: 'flex-end',
              marginTop: 5,
              marginLeft: '10%',
            }}>
            <TouchableOpacity onPress={() => {}}>
              <MaterialIcons name={'search'} size={24} color={Color.main} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
