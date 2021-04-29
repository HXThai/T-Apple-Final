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
  ActivityIndicator,
} from 'react-native';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/ProductStyle';
import Images from '../../Theme/Images';
import Color from '../../Theme/Color';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHistory} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import * as actions from '../../Redux/Action/salesAction';
import {connect} from 'react-redux';

const Promotion = (props) => {
  var deviceWidth = Dimensions.get('window').width;
  const salesData = props.data.responseSales;
  console.log('saleData', salesData);

  useEffect(() => {
    props.onGetList({});
  }, [props.onGetList]);

  if (props.data.loadingSales) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color={Color.main} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {salesData?.data?.data?.map((promotion) => (
          <View style={{padding: 10}}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('PromotionDetail', {
                  sales_param: promotion.id,
                });
              }}
              style={{
                padding: 10,
                backgroundColor: '#fff',
                marginTop: 10,
                borderRadius: 8,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 4,
              }}>
              <Text style={{fontSize: 14, fontWeight: '700', marginBottom: 7}}>
                {promotion.title}
              </Text>
              <Text numberOfLines={1} style={{fontSize: 14, fontWeight: '500'}}>
                {promotion.summary}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: 7,
                }}>
                <FontAwesomeIcon
                  icon={faHistory}
                  style={{marginRight: 7}}
                  size={15}
                />
                <Text style={{fontSize: 12, fontWeight: '400'}}>
                  Khuyến mãi từ {promotion.start_at} đến {promotion.end_at}
                </Text>
              </View>

              <Image
                source={{uri: promotion.image}}
                style={{
                  resizeMode: 'cover',
                  width: deviceWidth - 40,
                  minHeight: 207,
                  marginTop: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.salesReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetList: (params) => {
    dispatch(actions.getSales(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Promotion);
