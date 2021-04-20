import {API_BASE_URL} from '../../Constants/url.constant';
import callApiService from '../../utils/callAPI.service';

const homeService = {
  getListCategory: async (params = null) => {
    let url = `${API_BASE_URL.GET_LIST_CATEGORY}`;
    // console.log(url, params);
    let response = callApiService.get(url, params);
    return response;
  },
  getListBanner: async (params = null) => {
    let url = `${API_BASE_URL.GET_LIST_BANNER}`;
    let response = callApiService.get(url);
    return response;
  },
};

export default homeService;
