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
  ActivityIndicator,
  Alert,
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
import services from '../../Redux/Service/service';

const SearchScreen = (props) => {
  const [search, setSearch] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const [dataProduct, setDataProduct] = useState([]);

  const [page, setPage] = useState(1);

  var deviceWidth = Dimensions.get('window').width;

  const handleLoadMore = () => {
    console.log('thai');
    setPage(page + 1);
  };

  useEffect(() => {
    // setIsLoading(true);
    getData(page);
    return () => {};
  }, [page]);

  const getData = (page) => {
    services
      .searchProduct(null, search, page)
      .then(function (response) {
        // props.onGetList(response?.data);
        if (response) {
          // reactotron.log('thai', response);
          if (response.data.status_code === 200) {
            setDataProduct((prev) => [...prev, ...response?.data?.data?.data]);
          } else {
            Alert.alert('Thông báo!', response.data.message, [
              {text: 'Đồng ý'},
            ]);
            return;
          }
        } else {
          Alert.alert('Thông báo!', 'Lỗi!', [{text: 'Đồng ý'}]);
          return;
        }
      })
      .then(function () {
        // setIsLoadingMore(false);
        setIsLoading(false);
      });
  };

  const handleSearch = () => {
    setIsLoading(true);
    services
      .searchProduct(null, search, 1)
      .then(function (response) {
        if (response) {
          if (response.data.status_code === 200) {
            setDataProduct(response.data.data.data);
          } else {
            Alert.alert('Thông báo!', response.data.message, [
              {text: 'Đồng ý'},
            ]);
            return;
          }
        } else {
          Alert.alert('Thông báo!', 'Lỗi!', [{text: 'Đồng ý'}]);
          return;
        }
      })
      .then(function () {
        // setIsLoadingMore(false);
        setIsLoading(false);
      });
  };

  const renderProduct = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('ProductDetail', {
            service_param: item.id,
          });
        }}
        style={{
          width: Dimensions.get('window').width * 0.45,
          borderRadius: 4,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 4,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={{uri: item?.image}}
            style={{height: 120, width: 100}}
          />
        </View>
        <View style={{padding: 10}}>
          <Text numberOfLines={1} style={[styles.text, {fontWeight: '700'}]}>
            {item?.title}{' '}
          </Text>
          <Text
            style={[styles.text, {fontSize: 12, color: 'gray', marginTop: 5}]}>
            Ram: {item?.attribute?.ram} - Rom: {item?.attribute?.rom}
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.text, {fontWeight: 'bold', fontSize: 12}]}>
                {styles.dynamicSort(item?.price_sale)} đ
              </Text>
              <Text
                style={[
                  styles.text,
                  {textDecorationLine: 'line-through', fontSize: 11},
                ]}>
                {styles.dynamicSort(item?.price)} đ
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
                }}
                placeholder="Bạn cần tìm gì?"
                placeholderTextColor="gray"
                onChangeText={(text) => setSearch(text)}
                value={search}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              // width: '90%',
              justifyContent: 'flex-end',
              alignSelf: 'flex-end',
              marginTop: 5,
              marginLeft: '10%',
            }}>
            <TouchableOpacity onPress={() => handleSearch()}>
              <MaterialIcons name={'search'} size={24} color={Color.main} />
            </TouchableOpacity>
          </View>
        </View>
        {isLoading === true ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {isLoading && <ActivityIndicator size="large" color={Color.main} />}
          </View>
        ) : null}
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          style={{
            width: Dimensions.get('window').width - 10,
            marginTop: 5,
            marginLeft: 5,
            borderRadius: 5,
            marginBottom: 10,
            flex: 1,
            paddingLeft: 5,
            paddingRight: 5,
          }}
          data={dataProduct}
          renderItem={renderProduct}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0}
          // ListFooterComponent={renderFooter}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
