const ACTION_GET_SERVICEHIGHLIGHT = '[SERVICE] ACTION_SERVICEHIGHLIGHT';
const getServiceHighLight = (params) => {
  return {
    type: ACTION_GET_SERVICEHIGHLIGHT,
    payload: params,
  };
};

const ACTION_GET_SERVICEHIGHLIGHT_SUCCESS = '[SERVICE] ACTION_SERVICEHIGHLIGHT_SUCCESS';
const getServiceHighLightSuccess = (response) => {
  return {
    type: ACTION_GET_SERVICEHIGHLIGHT_SUCCESS,
    payload: response,
  };
};

const ACTION_GET_SERVICEHIGHLIGHT_FAILD = '[SERVICE] ACTION_SERVICEHIGHLIGHT_FAILD';
const getServiceHighLightFaild = (response) => {
  return {
    type: ACTION_GET_SERVICEHIGHLIGHT_FAILD,
    payload: response,
  };
};

export {
  ACTION_GET_SERVICEHIGHLIGHT,
  getServiceHighLight,
  ACTION_GET_SERVICEHIGHLIGHT_SUCCESS,
  getServiceHighLightSuccess,
  ACTION_GET_SERVICEHIGHLIGHT_FAILD,
  getServiceHighLightFaild,
};