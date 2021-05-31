import * as React from 'react';
import {createStackNavigator, Header} from '@react-navigation/stack';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import SplashScreen from '../Screen/SplashScreen';
import Home from '../Screen/Home';
import Product from '../Screen/product/Product';
import ProductDetail from '../Screen/product/ProductDetail';
import CartScreen from '../Screen/product/CartScreen';
import Order from '../Screen/product/Order';
import ConfirmOrder from '../Screen/product/ConfirmOrder';
import AccumulatePointScreen from '../Screen/AccumulatePointScreen';
import OrderHistoryScreen from '../Screen/OrderHistoryScreen';
import AccessoriesDetailScreen from '../Screen/service/AccessoriesDetailScreen';
import Personal from '../Screen/Personal';
import ChatScreen from '../Screen/ChatScreen';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Images from '../Theme/Images';
import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
} from 'react-native';
import Color from '../Theme/Color';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import LoginScreen from '../Screen/LoginScreen';
import RegisterScreen from '../Screen/RegisterScreen';
import ForgotPasswordScreen from '../Screen/ForgotPasswordScreen';
import AccessoriesScreen from '../Screen/service/AccessoriesScreen';
import Promotion from '../Screen/Promotion/Promotion';
import News from '../Screen/News/News';
import PromotionDetail from '../Screen/Promotion/PromotionDetail';
import NewsDetail from '../Screen/News/NewsDetail';
import Schedule from '../Screen/service/Schedule';
import ConfirmSchedule from '../Screen/service/ConfirmSchedule';
import Wallet from '../Screen/Wallet/Wallet';
import Feedback from '../Screen/Feedback/Feedback';
import PersonalDetail from '../Screen/PersonalDetail/PersonalDetail';
import ChangePassword from '../Screen/PersonalDetail/ChangePassword';
import AccumulatePointDetail from '../Screen/AccumulatePointDetail';
import NotificationScreen from '../Screen/Notification/NotificationScreen';
import NotificationDetailScreen from '../Screen/Notification/NotificationDetailScreen';
import SearchScreen from '../Screen/Search/SearchScreen';
import Warranty from '../Screen/Warranty/Warranty';
import LinearGradient from 'react-native-linear-gradient';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const GradientHeader = (props) => (
  <View style={{backgroundColor: 'red', height: 80, padding: 0}}>
    <LinearGradient
      colors={[Color.gradientStart, Color.gradientMiddle, Color.gradientEnd]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={[StyleSheet.absoluteFill, {height: 80}]}>
      <Header {...props} />
    </LinearGradient>
  </View>
);

const getTabBarVisibility = (route) => {
  const routename = getFocusedRouteNameFromRoute(route) ?? 'Home';
  // const routename = getFocusedRouteNameFromRoute(route) ?? 'Home';
  if (routename == 'Product') {
    return false;
  }
  if (routename == 'ProductDetail') {
    return false;
  }
  if (routename == 'CartScreen') {
    return false;
  }
  if (routename == 'Order') {
    return false;
  }
  if (routename == 'ConfirmOrder') {
    return false;
  }
  if (routename == 'AccessoriesDetailScreen') {
    return false;
  }
  if (routename == 'Schedule') {
    return false;
  }
  if (routename == 'AccessoriesScreen') {
    return false;
  }
  if (routename == 'ConfirmSchedule') {
    return false;
  }
  if (routename == 'Promotions') {
    return false;
  }
  if (routename == 'PromotionDetail') {
    return false;
  }
  if (routename == 'News') {
    return false;
  }
  if (routename == 'NewsDetail') {
    return false;
  }
  if (routename == 'Warranty') {
    return false;
  }
  if (routename == 'ChangePassword') {
    return false;
  }
  if (routename == 'PersonalDetail') {
    return false;
  }
  if (routename == 'Feedback') {
    return false;
  }
  if (routename == 'SearchScreen') {
    return false;
  }
  if (routename == 'NotificationDetailScreen') {
    return false;
  }

  return true;
};

export function isIPhoneX() {
  const {width, height} = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812 || height === 896 || width === 896)
  );
}

function TabNav(props) {
  return (
    <Tab.Navigator
      tabBar={(tab) => (
        <BottomTabBar
          {...tab}
          style={{
            ...tab.style,
            height: Platform.OS != 'ios' ? 60 : isIPhoneX ? 80 : 68,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
      )}
      screenOptions={({route}) => ({
        tabBarVisible: getTabBarVisibility(route),
        tabBarIcon: ({focused, color}) => {
          const routeName = route.name;
          let url;
          let size = 20;
          if (routeName === 'Trang chủ') {
            url = !focused ? (
              <MaterialIcons name={'home'} size={26} color="grey" />
            ) : (
              <MaterialIcons name={'home'} size={26} color={Color.main} />
            );
          } else if (routeName === 'Đơn hàng') {
            url = !focused ? (
              <MaterialIcons name={'assignment'} size={26} color="grey" />
            ) : (
              <MaterialIcons name={'assignment'} size={26} color={Color.main} />
            );
          } else if (routeName === 'Thông báo') {
            url = !focused ? (
              <MaterialIcons
                name={'circle-notifications'}
                size={26}
                color="grey"
              />
            ) : (
              <MaterialIcons
                name={'circle-notifications'}
                size={26}
                color={Color.main}
              />
            );
          } else if (routeName === 'Cá nhân') {
            url = !focused ? (
              <MaterialIcons name={'person-pin'} size={26} color="grey" />
            ) : (
              <MaterialIcons name={'person-pin'} size={26} color={Color.main} />
            );
          }
          return url;
        },
      })}
      tabBarOptions={{
        activeTintColor: Color.main,
        inactiveTintColor: 'gray',
        style: {
          position: 'absolute',
          height: 50,
          backgroundColor: '#fff',
        },
        tabStyle: {
          paddingVertical: 5,
        },
      }}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeStack}
        navigationOptions={{tabBarLabel: 'Trang chủ'}}
      />
      {/* <Tab.Screen
        name="Chat"
        component={ChatScreen}
        navigationOptions={{tabBarLabel: 'Chat'}}
      /> */}
      <Tab.Screen
        name="Đơn hàng"
        component={ServiceStack}
        navigationOptions={{tabBarLabel: 'Đơn hàng'}}
      />
      <Tab.Screen
        name="Thông báo"
        component={NotificationStack}
        navigationOptions={{tabBarLabel: 'Thông báo'}}
      />
      <Tab.Screen
        name="Cá nhân"
        component={PersonalStack}
        navigationOptions={{tabBarLabel: 'Cá nhân'}}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ServiceStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderHistoryScreen"
        component={OrderHistoryScreen}
        options={{
          headerShown: false,
          // headerTitle: 'Đơn hàng',
          // headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          // headerStyle: {
          //   backgroundColor: Color.main,
          //   elevation: 0,
          // },
        }}
      />

      <Stack.Screen
        name="AccessoriesDetailScreen"
        component={AccessoriesDetailScreen}
        options={{
          // header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Chi tiết đơn hàng',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('OrderHistoryScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function PersonalStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Personal"
        component={Personal}
        options={{
          headerShown: false,
          // headerTitle: 'Cá nhân',
          // headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          // headerStyle: {
          //   backgroundColor: Color.main,
          //   elevation: 0,
          // },
        }}
      />

      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerTitle: 'Ví của tôi',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Personal');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{
          headerTitle: 'Phản hồi',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Personal');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Warranty"
        component={Warranty}
        options={{
          headerTitle: 'Bảo hành',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Personal');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="PersonalDetail"
        component={PersonalDetail}
        options={{
          headerTitle: 'Chi tiết khách hàng',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Personal');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerTitle: 'Đổi mật khẩu',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Personal');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="Home"
        options={{
          headerTitle: 'Trang chủ',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          tabBarVisible: false,
          headerShown: false,
        }}
      />

      <Stack.Screen
        component={Wallet}
        name="Wallet"
        options={{
          headerTitle: 'Số dư ví',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          tabBarVisible: false,
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          // header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Điện thoại',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('CartScreen')}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  marginRight: 15,
                }}>
                <MaterialIcons
                  name={'shopping-cart'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          tabBarVisible: false,
        }}
      />

      <Stack.Screen
        name="AccessoriesScreen"
        component={AccessoriesScreen}
        options={{
          // header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Phụ kiện',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('CartScreen')}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  marginRight: 15,
                }}>
                <MaterialIcons
                  name={'shopping-cart'}
                  size={30}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="Schedule"
        component={Schedule}
        options={{
          headerTitle: 'Đặt lịch',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
          tabBarVisible: false,
        }}
      />

      <Stack.Screen
        name="ConfirmSchedule"
        component={ConfirmSchedule}
        options={{
          headerTitle: 'Xác nhận đặt lịch',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
          tabBarVisible: false,
        }}
      />

      <Stack.Screen
        name="Promotions"
        component={Promotion}
        options={{
          // header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Khuyến mãi',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="PromotionDetail"
        component={PromotionDetail}
        options={{
          // header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Chi tiết khuyến mãi',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Promotions');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="News"
        component={News}
        options={{
          // header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Tin tức',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{
          // header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Chi tiết tin tức',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('News');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerTitle: 'Chi tiết điện thoại',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          // header: (props) => <GradientHeader {...props} />,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Product');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTitle: 'Giỏ hàng',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{
          headerTitle: 'Đặt mua',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('CartScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Stack.Screen
        name="ConfirmOrder"
        component={ConfirmOrder}
        options={{
          headerTitle: 'Xác nhận đơn hàng',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Order');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
          tabBarVisible: false,
        }}
      />

      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          // header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Tìm kiếm',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="AccessoriesDetailScreen"
        component={AccessoriesDetailScreen}
        options={{
          // header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Chi tiết phụ kiện',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('AccessoriesScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function NotificationStack(props) {
  return (
    <Stack.Navigator headerMode="screen" screenOptions>
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          // header: (props) => <GradientHeader {...props} />,
          headerShown: false,
          headerTitle: 'Thông báo',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="NotificationDetailScreen"
        component={NotificationDetailScreen}
        options={{
          // header: (props) => <GradientHeader {...props} />,
          headerTitle: 'Chi tiết thông báo',
          headerTitleStyle: {alignSelf: 'center', color: '#fff'},
          headerStyle: {
            backgroundColor: Color.main,
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('NotificationScreen');
              }}>
              <View style={{marginLeft: 15}}>
                <MaterialIcons
                  name={'arrow-back-ios'}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                width: 22,
                height: 27,
                alignItems: 'center',
                marginRight: 15,
              }}>
              {/* <Image
                source={Images.cartHeader}
                // resizeMode="contain"
                style={{width: 22, height: 27}}
              /> */}
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default App;
