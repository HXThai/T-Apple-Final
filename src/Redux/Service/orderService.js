import {API_BASE_URL, ROOT_DOMAIN} from '../../Constants/url.constant';
import callApiService from '../../utils/callAPI.service';

const newsService = {
  newOrder: async (params) => {
    let url = `${API_BASE_URL.NEW_ORDER}`;
    let response = callApiService.post(url, params);
    // console.log(response);
    return response;
  },
  oderHistory: async (params) => {
    let url = `${API_BASE_URL.ORDER_HISTORY}`;
    let response = callApiService.get(url, params);
    // console.log(response);
    return response;
  },
};

export default newsService;
