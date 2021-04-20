const ACTION_GET_SERVICE = '[SERVICE] ACTION_SERVICE';
const getService = (params) => {
  return {
    type: ACTION_GET_SERVICE,
    payload: params,
  };
};

const ACTION_GET_SERVICE_SUCCESS = '[SERVICE] ACTION_SERVICE_SUCCESS';
const getServiceSuccess = (response) => {
  return {
    type: ACTION_GET_SERVICE_SUCCESS,
    payload: response,
  };
};

const ACTION_GET_SERVICE_FAILD = '[SERVICE] ACTION_SERVICE_FAILD';
const getServiceFaild = (response) => {
  return {
    type: ACTION_GET_SERVICE_FAILD,
    payload: response,
  };
};

const ACTION_GET_CATEGORIES_SERVICE = '[SERVICE] ACTION_GET_CATEGORIES_SERVICE';
const getCategoriesService = (params) => {
  return {
    type: ACTION_GET_CATEGORIES_SERVICE,
    payload: params,
  };
};

const ACTION_GET_CATEGORIES_SERVICE_SUCCESS =
  '[SERVICE] ACTION_GET_CATEGORIES_SERVICE_SUCCESS';
const getCategoriesServiceSuccess = (response) => {
  return {
    type: ACTION_GET_CATEGORIES_SERVICE_SUCCESS,
    payload: response,
  };
};

const ACTION_GET_CATEGORIES_SERVICE_FAILD =
  '[SERVICE] ACTION_GET_CATEGORIES_SERVICE_FAILD';
const getCategoriesServiceFaild = (response) => {
  return {
    type: ACTION_GET_CATEGORIES_SERVICE_FAILD,
    payload: response,
  };
};

const ACTION_GET_ACCESSORIES = '[SERVICE] ACTION_GET_ACCESSORIES';
const getAccessories = (params) => {
  return {
    type: ACTION_GET_ACCESSORIES,
    payload: params,
  };
};

const ACTION_GET_ACCESSORIES_SUCCESS =
  '[SERVICE] ACTION_GET_ACCESSORIES_SUCCESS';
const getAccessoriesSuccess = (response) => {
  return {
    type: ACTION_GET_ACCESSORIES_SUCCESS,
    payload: response,
  };
};

const ACTION_GET_ACCESSORIES_FAILD = '[SERVICE] ACTION_GET_ACCESSORIES_FAILD';
const getAccessoriesFaild = (response) => {
  return {
    type: ACTION_GET_ACCESSORIES_FAILD,
    payload: response,
  };
};

const ACTION_GET_CATEGORIES_ACCESSORIES =
  '[SERVICE] ACTION_GET_CATEGORIES_ACCESSORIES';
const getCategoriesAccessories = (params) => {
  return {
    type: ACTION_GET_CATEGORIES_ACCESSORIES,
    payload: params,
  };
};

const ACTION_GET_CATEGORIES_ACCESSORIES_SUCCESS =
  '[SERVICE] ACTION_GET_CATEGORIES_ACCESSORIES_SUCCESS';
const getCategoriesAccessoriesSuccess = (response) => {
  return {
    type: ACTION_GET_CATEGORIES_ACCESSORIES_SUCCESS,
    payload: response,
  };
};

const ACTION_GET_CATEGORIES_ACCESSORIES_FAILD =
  '[SERVICE] ACTION_GET_CATEGORIES_ACCESSORIES_FAILD';
const getCategoriesAccessoriesFaild = (response) => {
  return {
    type: ACTION_GET_CATEGORIES_ACCESSORIES_FAILD,
    payload: response,
  };
};

export {
  ACTION_GET_SERVICE,
  getService,
  ACTION_GET_SERVICE_SUCCESS,
  getServiceSuccess,
  ACTION_GET_SERVICE_FAILD,
  getServiceFaild,
  ACTION_GET_CATEGORIES_SERVICE,
  getCategoriesService,
  ACTION_GET_CATEGORIES_SERVICE_SUCCESS,
  getCategoriesServiceSuccess,
  ACTION_GET_CATEGORIES_SERVICE_FAILD,
  getCategoriesServiceFaild,
  ACTION_GET_ACCESSORIES,
  getAccessories,
  ACTION_GET_ACCESSORIES_SUCCESS,
  getAccessoriesSuccess,
  ACTION_GET_ACCESSORIES_FAILD,
  getAccessoriesFaild,
  ACTION_GET_CATEGORIES_ACCESSORIES,
  getCategoriesAccessories,
  ACTION_GET_CATEGORIES_ACCESSORIES_SUCCESS,
  getCategoriesAccessoriesSuccess,
  ACTION_GET_CATEGORIES_ACCESSORIES_FAILD,
  getCategoriesAccessoriesFaild,
};
