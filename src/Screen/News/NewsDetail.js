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
import services from '../../Redux/Service/newsService';

const NewsDetail = (props) => {
  const [data, setdata] = useState([]);
  const news_param = props?.route?.params?.news_param || null;

  useEffect(() => {
    (async () => {
      const res = await services.getListNewsDetail(news_param);
      setdata(res.data.data);
      // console.log(res.data.data);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{padding: 15, width: '100%'}}>
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
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <FontAwesomeIcon
            style={{marginRight: 5, marginTop: 2}}
            icon={faHistory}
          />
          <Text style={{fontWeight: '700'}}>{data.created_at}</Text>
        </View>
        <Text style={{marginBottom: 25}}>{data.content}</Text>
      </ScrollView>
    </View>
  );
};

export default NewsDetail;
