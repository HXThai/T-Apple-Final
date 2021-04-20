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
import moment from 'moment';
import services from '../../Redux/Service/saleService';

const PromotionDetail = (props) => {
  const [data, setdata] = useState([]);
  const sales_param = props?.route?.params?.sales_param || null;

  useEffect(() => {
    (async () => {
      const res = await services.getListSalesDetail(sales_param);
      console.log('sale', res.data.data);
      setdata(res.data.data);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{padding: 15, width: '100%'}}>
          <Image
            source={{
              uri: data.image,
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
            {data.title}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text>Ngày áp dụng: </Text>
            <Text style={{fontWeight: '700'}}>{data.start_at}</Text>
          </View>

          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 10}}>
            <Text>Hạn áp dụng: </Text>
            <Text style={{fontWeight: '700'}}>{data.end_at}</Text>
          </View>
          <Text style={{marginBottom: 25}}>{data.content}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PromotionDetail;
