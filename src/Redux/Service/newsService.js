import {API_BASE_URL, ROOT_DOMAIN} from '../../Constants/url.constant';
import callApiService from '../../utils/callAPI.service';

const newsService = {
  getListNews: async (params) => {
    let url = `${API_BASE_URL.GET_LIST_NEWS}`;
    let response = callApiService.get(url);
    // console.log(response);
    return response;
  },
  getListNewsHightlight: async (params, limit) => {
    let url = `${API_BASE_URL.GET_LIST_NEWS_HIGHLIGHT}&limit=${limit}`;
    let response = callApiService.get(url, params);
    // console.log(response);
    return response;
  },
  getListNewsDetail: async (params) => {
    let url = `${ROOT_DOMAIN}/news/${params}/detail`;
    let response = callApiService.get(url);
    return response;
  },
};

export default newsService;
