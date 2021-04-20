import * as actions from '../Action/newsAction';

const initialHomeState = {
  isErrorData: false,
  responseData: null,
  loadingData: false,
  msgData: null,

  isErrorDataNewsHighlight: false,
  responseDataNewsHighlight: null,
  loadingDataNewsHighlight: false,
  msgDataNewsHighlight: null,
};

const newsReducer = (state = initialHomeState, action) => {
  switch (action.type) {
    case actions.ACTION_GET_DATA:
      return {
        ...state,
        isErrorData: false,
        responseData: null,
        loadingData: true,
        msgData: null,
      };

    case actions.ACTION_GET_DATA_SUCCESS:
      return {
        ...state,
        isErrorData: false,
        responseData: action.payload,
        loadingData: false,
        msgData: null,
      };

    case actions.ACTION_GET_DATA_FAILD:
      return {
        ...state,
        isErrorData: true,
        responseData: null,
        loadingData: false,
        msgData: action.payload,
      };
    case actions.ACTION_GET_NEWS_HIGHLIGHT:
      return {
        ...state,
        isErrorDataNewsHighlight: false,
        responseDataNewsHighlight: null,
        loadingDataNewsHighlight: true,
        msgDataNewsHighlight: null,
      };

    case actions.ACTION_GET_NEWS_HIGHLIGHT_SUCCESS:
      return {
        ...state,
        isErrorDataNewsHighlight: false,
        responseDataNewsHighlight: action.payload,
        loadingDataNewsHighlight: false,
        msgDataNewsHighlight: null,
      };

    case actions.ACTION_GET_NEWS_HIGHLIGHT_FAILD:
      return {
        ...state,
        isErrorDataNewsHighlight: true,
        responseDataNewsHighlight: null,
        loadingDataNewsHighlight: false,
        msgDataNewsHighlight: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
