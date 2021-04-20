import * as actions from '../Action/serviceAction';

const initialServiceState = {
  isErrorService: false,
  responseService: null,
  loadingService: false,
  msgService: null,

  isErrorCategoriesService: false,
  responseCategoriesService: null,
  loadingCategoriesService: false,
  msgCategoriesService: null,

  isErrorAccessories: false,
  responseAccessories: null,
  loadingAccessories: false,
  msgAccessories: null,

  isErrorCategoriesAccessories: false,
  responseCategoriesAccessories: null,
  loadingCategoriesAccessories: false,
  msgCategoriesAccessories: null,
};

const serviceReducer = (state = initialServiceState, action) => {
  switch (action.type) {
    case actions.ACTION_GET_SERVICE:
      return {
        ...state,
        isErrorService: false,
        responseService: null,
        loadingService: true,
        msgService: null,
      };

    case actions.ACTION_GET_SERVICE_SUCCESS:
      return {
        ...state,
        isErrorService: false,
        responseService: action.payload,
        loadingService: false,
        msgService: null,
      };

    case actions.ACTION_GET_SERVICE_FAIL:
      return {
        ...state,
        isErrorService: true,
        responseService: null,
        loadingService: false,
        msgService: action.payload,
      };
    case actions.ACTION_GET_CATEGORIES_SERVICE:
      return {
        ...state,
        isErrorCategoriesService: false,
        responseCategoriesService: null,
        loadingCategoriesService: true,
        msgCategoriesService: null,
      };

    case actions.ACTION_GET_CATEGORIES_SERVICE_SUCCESS:
      return {
        ...state,
        isErrorCategoriesService: false,
        responseCategoriesService: action.payload,
        loadingCategoriesService: false,
        msgCategoriesService: null,
      };

    case actions.ACTION_GET_CATEGORIES_SERVICE_FAILD:
      return {
        ...state,
        isErrorCategoriesService: true,
        responseCategoriesService: null,
        loadingCategoriesService: false,
        msgCategoriesService: action.payload,
      };

    case actions.ACTION_GET_ACCESSORIES:
      return {
        ...state,
        isErrorAccessories: false,
        responseAccessories: null,
        loadingAccessories: true,
        msgAccessories: null,
      };

    case actions.ACTION_GET_ACCESSORIES_SUCCESS:
      return {
        ...state,
        isErrorAccessories: false,
        responseAccessories: action.payload,
        loadingAccessories: false,
        msgAccessories: null,
      };

    case actions.ACTION_GET_ACCESSORIES_FAILD:
      return {
        ...state,
        isErrorAccessories: true,
        responseAccessories: null,
        loadingAccessories: false,
        msgAccessories: action.payload,
      };

    case actions.ACTION_GET_CATEGORIES_ACCESSORIES:
      return {
        ...state,
        isErrorCategoriesAccessories: false,
        responseCategoriesAccessories: null,
        loadingCategoriesAccessories: true,
        msgCategoriesAccessories: null,
      };

    case actions.ACTION_GET_CATEGORIES_ACCESSORIES_SUCCESS:
      return {
        ...state,
        isErrorCategoriesAccessories: false,
        responseCategoriesAccessories: action.payload,
        loadingCategoriesAccessories: false,
        msgCategoriesAccessories: null,
      };

    case actions.ACTION_GET_CATEGORIES_ACCESSORIES_FAILD:
      return {
        ...state,
        isErrorCategoriesAccessories: true,
        responseCategoriesAccessories: null,
        loadingCategoriesAccessories: false,
        msgCategoriesAccessories: action.payload,
      };
    default:
      return state;
  }
};

export default serviceReducer;
