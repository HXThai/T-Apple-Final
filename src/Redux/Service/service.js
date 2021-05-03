import {API_BASE_URL, ROOT_DOMAIN} from '../../Constants/url.constant';
import callApiService from '../../utils/callAPI.service';

const service = {
  getListService: async (params, id, page) => {
    let url = `${API_BASE_URL.GET_LIST_SERVICE}?category_id=${id}&page=${page}&type=1`;
    console.log('thai', url);
    let response = callApiService.get(url, params);
    // console.log(params);
    return response;
  },
  getListServiceDetail: async (params) => {
    let url = `${ROOT_DOMAIN}/product/${params}/detail`;
    console.log('thai url', url);
    let response = callApiService.get(url);
    return response;
  },
  getCategoriesService: async (params) => {
    let url = `${API_BASE_URL.GET_LIST_CATEGORY}?type=1`;
    let response = callApiService.get(url);
    return response;
  },
  getListServiceHighlight: async (params) => {
    let url = `${API_BASE_URL.GET_LIST_SERVICE_HIGHLIGHT}&limit=${params.limit}&type=1`;
    let response = callApiService.get(url);
    return response;
  },
  getListAccessoriesHighlight: async (params, limit) => {
    let url = `${API_BASE_URL.GET_LIST_SERVICE_HIGHLIGHT}&limit=${limit}&type=2`;
    let response = callApiService.get(url);
    return response;
  },
  getCategoriesAccessories: async (params) => {
    let url = `${API_BASE_URL.GET_LIST_CATEGORY}?type=2`;
    let response = callApiService.get(url);
    return response;
  },
  getListAccessories: async (params, id, page) => {
    let url = `${API_BASE_URL.GET_LIST_SERVICE}?category_id=${id}&page=${page}&type=2`;
    let response = callApiService.get(url, params);
    // console.log(params);
    return response;
  },
  searchProduct: async (params, title, page) => {
    let url = `${API_BASE_URL.GET_LIST_SERVICE}?title=${title}&page=${page}`;
    // console.log('thai', url);
    let response = callApiService.get(url, params);
    // console.log(params);
    return response;
  },
};

export default service;
