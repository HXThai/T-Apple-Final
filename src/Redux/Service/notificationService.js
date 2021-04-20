import {API_BASE_URL, ROOT_DOMAIN} from '../../Constants/url.constant';
import callApiService from '../../utils/callAPI.service';
import axios from 'axios';

const newsService = {
  getListNotification: async (params) => {
    let url = `${API_BASE_URL.GET_LIST_NOTIFICATION}`;
    let response = callApiService.get(url);
    // console.log(response);
    return response;
  },
};

export default newsService;
