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
            uri: props?.route?.params?.item?.image,
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
          {props?.route?.params?.item?.title}
        </Text>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <FontAwesomeIcon
            style={{marginRight: 5, marginTop: 2}}
            icon={faHistory}
          />
          <Text style={{fontWeight: '700'}}>
            {props?.route?.params?.item?.created_at}
          </Text>
        </View>
        <Text style={{marginBottom: 25}}>
          {props?.route?.params?.item?.body}
        </Text>
      </View>
    </View>
  );
};

export default NewsDetail;
