import * as actions from '../Action/service_highlightAction';

const initialServiceState = {
  isErrorService_highlightReducer: false,
  responseService_highlightReducer: null,
  loadingService_highlightReducer: false,
  msgService_highlightReducer: null,
};

const service_highlightReducer = (state = initialServiceState, action) => {
  switch (action.type) {
    case actions.ACTION_GET_SERVICEHIGHLIGHT:
      return {
        ...state,
        isErrorService_highlightReducer: false,
        responseService_highlightReducer: null,
        loadingService_highlightReducer: true,
        msgService_highlightReducer: null,
      };

    case actions.ACTION_GET_SERVICEHIGHLIGHT_SUCCESS:
      return {
        ...state,
        isErrorService_highlightReducer: false,
        responseService_highlightReducer: action.payload,
        loadingService_highlightReducer: false,
        msgService_highlightReducer: null,
      };

    case actions.ACTION_GET_SERVICEHIGHLIGHT_FAILD:
      return {
        ...state,
        isErrorService_highlightReducer: true,
        responseService_highlightReducer: null,
        loadingService_highlightReducer: false,
        msgService_highlightReducer: action.payload,
      };
    default:
      return state;
  }
};

export default service_highlightReducer;
