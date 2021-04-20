import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/ProductStyle';
import Images from '../../Theme/Images';
import Color from '../../Theme/Color';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHistory} from '@fortawesome/free-solid-svg-icons';

const NewsDetail = (props) => {
  return (
    <View style={styles.container}>
      <View style={{padding: 15, width: '100%'}}>
        <Image
          source={{
            uri:
              'https://giatien.net/thumb/1920x863/1/upload/hinhanh/untitled-2-2513.png',
          }}
          style={{width: '100%', minHeight: 207}}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '700',
            marginBottom: 15,
            marginTop: 15,
          }}>
          Dạy nấu ăn tại nhà đơn giản ngon miệng{' '}
        </Text>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <FontAwesomeIcon
            style={{marginRight: 5, marginTop: 2}}
            icon={faHistory}
          />
          <Text style={{fontWeight: '700'}}>12/11/2019</Text>
        </View>
        <Text style={{marginBottom: 25}}>
          Cảm ơn các bạn đã dành tình cảm cho nhung sản phẩm của mình trong thời
          gian qua và cho ca khúc này nói riêng. Cảm ơn tất cả nhung phản hồi,
          góp ý cùng việc hỗ trợ mình chia sẻ những đứa con tinh thần đến với
          cộng đồng nghe nhạc.
        </Text>
      </View>
    </View>
  );
};

export default NewsDetail;
