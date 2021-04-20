const ROOT_DOMAIN = 'https://tapple.eopdev.com/api';

const API_BASE_URL = {
  GET_LIST_CATEGORY: ROOT_DOMAIN + '/categories/list',
  SIGN_IN: ROOT_DOMAIN + '/auth/sign-in',
  GET_VERIFY: ROOT_DOMAIN + '/auth/verify',
  REGISTER: ROOT_DOMAIN + '/auth/register',
  GET_VERIFY_FORGOT_PASSWORD: +ROOT_DOMAIN + '/auth/verify',
  FORGOT_PASSWORD: +ROOT_DOMAIN + '/auth/forgot-password',
  CHANGE_PASSWORD: +ROOT_DOMAIN + '/profile/change-password',
  SIGN_OUT: +ROOT_DOMAIN + '/profile/logout',
  UPDATE_USER: +ROOT_DOMAIN + '/profile/update',

  GET_LIST_BANNER: ROOT_DOMAIN + '/banner/list',
  GET_LIST_SERVICE: ROOT_DOMAIN + '/product/list',
  GET_LIST_SERVICE_HIGHLIGHT: ROOT_DOMAIN + '/product/list?highlight=1',
  GET_LIST_SALES: ROOT_DOMAIN + '/promotion/list',
  GET_LIST_SALES_HIGHLIGHT: ROOT_DOMAIN + '/promotion/list?highlight=1',
  GET_LIST_NEWS: ROOT_DOMAIN + '/news/list',
  GET_LIST_NEWS_HIGHLIGHT: ROOT_DOMAIN + '/news/list?highlight=1',
  GET_LIST_PROVINCE: ROOT_DOMAIN + '/branch/province',
  GET_LIST_BRANCH: ROOT_DOMAIN + '/branch/list',
  BOOKING_SERVICE: ROOT_DOMAIN + '/booking/store',
  GET_LIST_BOOKING: ROOT_DOMAIN + '/booking/list',

  NEW_ORDER: ROOT_DOMAIN + '/order/store',
  ORDER_HISTORY: ROOT_DOMAIN + '/order/list',

  GET_LIST_NOTIFICATION: ROOT_DOMAIN + '/notification/list',
};

export {API_BASE_URL, ROOT_DOMAIN};
