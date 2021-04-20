import {API_BASE_URL} from '../../Constants/url.constant';
import callApiService from '../../utils/callAPI.service';
export default signInService = {
  signIn: async (params) => {
    // console.log(params);
    let url = `${API_BASE_URL.SIGN_IN}`;
    let response = callApiService.post(url, params);
    return response;
  },
};
