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
import {connect} from 'react-redux';
import * as actions from '../../Redux/Action/newsAction';
import moment from 'moment';

const News = (props) => {
  var deviceWidth = Dimensions.get('window').width;

  const newsData = props.data.responseData;

  useEffect(() => {
    props.onGetList({});
  }, [props.onGetList]);

  if (props.data.loadingData) {
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
        {newsData?.data?.data?.map((promotion) => (
          <View style={{padding: 10}}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('NewsDetail', {
                  news_param: promotion.id,
                })
              }
              style={{
                padding: 10,
                backgroundColor: '#fff',
                marginTop: 10,
                borderRadius: 8,
                elevation: 8,
              }}>
              <Image
                width={347}
                height={207}
                source={{uri: promotion.image}}
                style={{
                  resizeMode: 'cover',
                  width: deviceWidth - 40,
                  height: 207,
                }}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '700',
                  marginBottom: 7,
                  marginTop: 5,
                }}>
                {promotion.title}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 7,
                }}>
                <FontAwesomeIcon
                  icon={faHistory}
                  style={{marginRight: 7}}
                  size={15}
                />
                <Text style={{fontSize: 12, fontWeight: '400'}}>
                  {moment(promotion.created_at).format('h:mm DD/MM/YYYY')}
                </Text>
              </View>
              <Text numberOfLines={1} style={{fontSize: 14, fontWeight: '500'}}>
                {promotion.summary}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.newsReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetList: (params) => {
    dispatch(actions.getData(params));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(News);
