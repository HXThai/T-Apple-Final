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
  Alert,
  ActivityIndicator,
} from 'react-native';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/ProductStyle';
import Images from '../../Theme/Images';
import Color from '../../Theme/Color';
import {connect} from 'react-redux';
import * as actions from '../../Redux/Action/serviceAction';
import services from '../../Redux/Service/service';

const DataItem = ({title, color}) => {
  return (
    <View
      style={{
        padding: 10,
        height: 40,
        backgroundColor: '#11111110',
        justifyContent: 'center',
      }}>
      <Text style={{color: color}}>{title}</Text>
    </View>
  );
};

const Product = (props) => {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       props.navigation.navigate('ChooseCityScreen');
  //     }, 3000);
  //   }, []);
  const [tab, setTab] = useState(0);
  const [dataTab, setDataTab] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [numberPage, setNumberPage] = useState(1);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const onClickChangeTab = (value) => {
    setIsLoading(true);
    setDataProduct([]);
    setTab(value);
    setPage(1);
    // console.log('page', page);
    // getData(value);
    // console.log(props.data.responseService);
    // props.onGetListService({id: value, page: page});
    // console.log(value);
    console.log('page', page);
    getData(value, page);
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    // setIsLoading(true);
    getData(tab, page);
    return () => {};
  }, [page]);

  const getData = (id, page) => {
    services
      .getListAccessories(null, id, page)
      .then(function (response) {
        // props.onGetList(response?.data);
        if (response) {
          // console.log(response);
          if (response.data.status_code === 200) {
            // setDataProduct(response?.data?.data?.data);
            // console.log(response.data.data.data);
            setDataProduct((prev) => [...prev, ...response?.data?.data?.data]);
          }
        } else {
          Alert.alert('Th??ng b??o!', 'L???i!', [{text: '?????ng ??'}]);
          return;
        }
      })
      .then(function () {
        // setIsLoadingMore(false);
        setIsLoading(false);
      });
  };

  const getCategories = () => {
    services.getCategoriesAccessories({}).then(function (response) {
      // props.onGetList(response?.data);
      if (response) {
        // console.log(response);
        if (response.data.status_code === 200) {
          // setDataProduct(response?.data?.data?.data);
          // console.log(response.data.data.data);
          setDataTab(response?.data);
        }
      } else {
        Alert.alert('Th??ng b??o!', 'L???i!', [{text: '?????ng ??'}]);
        return;
      }
    });
    // .then(function () {
    //   setIsLoading(false);
    // });
  };

  // if (props.data.loadingAccessories) {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}>
  //       <ActivityIndicator size="large" color={Color.main} />
  //     </View>
  //   );
  // }

  const renderProduct = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('AccessoriesDetailScreen', {
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
          <Image source={{uri: item.image}} style={{height: 120, width: 100}} />
        </View>
        <View style={{padding: 10}}>
          <Text style={[styles.text, {fontWeight: '700'}]}>{item.title} </Text>
          {/* <Text style={[styles.text, {fontSize: 12, color: 'gray'}]}>
                    Ram: {item.attribute.ram} - Rom: {item.attribute.rom}
                  </Text> */}
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
                {styles.dynamicSort(item.price_sale)} ??
              </Text>
              <Text
                style={[
                  styles.text,
                  {textDecorationLine: 'line-through', fontSize: 11},
                ]}>
                {styles.dynamicSort(item.price)} ??
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const handleLoadMore = () => {
    console.log('thai thai');
    // setPage(page + 1);
    dataProduct.length >= 10 ? setPage(page + 1) : null;
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 5,
          // marginLeft: 5,
          padding: 5,
          alignItems: 'center',
          // backgroundColor: '#fff',
          borderRadius: 4,
          justifyContent: 'space-around',
        }}>
        {dataTab === null ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
        ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {dataTab &&
              dataTab.data &&
              dataTab.data.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      borderColor: item.id === tab ? '#0000CD' : '#fff',
                      borderRadius: 5,
                      // height: 35,
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#fff',
                      marginRight: 3,
                      // backgroundColor: '#FF8C00',
                      // borderBottomWidth: item.id === tab ? 1 : 0,
                    }}>
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => onClickChangeTab(item.id)}>
                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 5,
                        }}>
                        <Text
                          style={{
                            fontSize: 13,
                            fontWeight: '600',
                            color: item.id === tab ? Color.main : '#898989',
                            padding: 10,
                          }}>
                          {item.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
          </ScrollView>
        )}
      </View>
      {isLoading === true ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
  );
};

const mapStateToProps = (state) => {
  // console.log('data : ', state.serviceReducer);
  return {
    data: state.serviceReducer,
    // dataService: state.serviceReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetCategories: (params) => {
    dispatch(actions.getCategoriesAccessories(params));
  },
  onGetListService: (params) => {
    dispatch(actions.getAccessories(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
