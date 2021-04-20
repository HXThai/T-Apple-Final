import {API_BASE_URL, ROOT_DOMAIN} from '../../Constants/url.constant';
import callApiService from '../../utils/callAPI.service';

const salesService = {
  getListSales: async (params = null) => {
    let url = `${API_BASE_URL.GET_LIST_SALES}`;
    let response = callApiService.get(url);
    return response;
  },
  getListSalesHightlight: async (params) => {
    let url = `${API_BASE_URL.GET_LIST_SALES_HIGHLIGHT}&limit=${params.limit}`;
    let response = callApiService.get(url, params);
    // console.log('dataSaleHighlight', response);
    return response;
  },
  getListSalesDetail: async (params) => {
    let url = `${ROOT_DOMAIN}/promotion/${params}/detail`;
    let response = callApiService.get(url);
    return response;
  },
};

export default salesService;
