import {API_BASE_URL} from '../../Constants/url.constant';
import callApiService from '../../utils/callAPI.service';
export default userService = {
    getVerify : async (params) => {
        let url = `${API_BASE_URL.GET_VERIFY}`;
        let response = callApiService.post(url,params);
        return response;
    },
    forgotPassword : async (params) => {
        let url = `${API_BASE_URL.REGISTER}`;
        let response = callApiService.post(url,params);
        return response;
    },
    changePassWord : async (params) => {
        let url = `${API_BASE_URL.GET_VERIFY_FORGOT_PASSWORD}`;
        let response = callApiService.post(url,params);
        return response;
    },
    signOut : async (params) => {
        let url = `${API_BASE_URL.SIGN_OUT}`;
        let response = callApiService.get(url,params);
        return response;
    },
    updateUser : async (params) => {
        let url = `${API_BASE_URL.UPDATE_USER}`;
        let response = callApiService.post(url,params);
        return response;
    },
}