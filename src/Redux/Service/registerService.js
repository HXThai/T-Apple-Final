import {API_BASE_URL} from '../../Constants/url.constant';
import callApiService from '../../utils/callAPI.service';
export default registerService = {
  getVerify: async (params) => {
    let url = `${API_BASE_URL.GET_VERIFY}`;
    let response = callApiService.post(url, params);
    return response;
  },
  register: async (params) => {
    let url = `${API_BASE_URL.REGISTER}`;
    let response = callApiService.post(url, params);
    return response;
  },

  forgotPassword: async (params) => {
    let url = `${API_BASE_URL.FORGOT_PASSWORD}`;
    let response = callApiService.post(url, params);
    return response;
  },
};
