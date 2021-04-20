import {API_BASE_URL, ROOT_DOMAIN} from '../../Constants/url.constant';
import callApiService from '../../utils/callAPI.service';
import axios from 'axios';

const newsService = {
  getListProvince: async (params) => {
    let url = `${API_BASE_URL.GET_LIST_PROVINCE}`;
    let response = callApiService.get(url);
    // console.log(response);
    return response;
  },
  getListBranch: async (params) => {
    let url = `${API_BASE_URL.GET_LIST_BRANCH}?province_id=${params}`;
    let response = callApiService.get(url);
    // console.log(response);
    return response;
  },
  bookingService: async (params, token) => {
    let url = `${API_BASE_URL.BOOKING_SERVICE}`;
    // console.log('thai', params);
    let response = callApiService.post(url, params, token);
    // console.log(header);
    return response;
  },
  getListBooking: async (params) => {
    let url = `${API_BASE_URL.GET_LIST_BOOKING}`;
    let response = callApiService.get(url);
    // console.log(response);
    return response;
  },
};

export default newsService;
