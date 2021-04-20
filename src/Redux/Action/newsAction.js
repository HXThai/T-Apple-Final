const ACTION_GET_DATA = '[NEWS] ACTION_DATA';
const getData = (params) => {
  return {
    type: ACTION_GET_DATA,
    payload: params,
  };
};

const ACTION_GET_DATA_SUCCESS = '[NEWS] ACTION_DATA_SUCCESS';
const getDataSuccess = (response) => {
  return {
    type: ACTION_GET_DATA_SUCCESS,
    payload: response,
  };
};

const ACTION_GET_DATA_FAILD = '[NEWS] ACTION_DATA_FAILD';
const getDataFaild = (response) => {
  return {
    type: ACTION_GET_DATA_FAILD,
    payload: response,
  };
};

//get news highlight
const ACTION_GET_NEWS_HIGHLIGHT = '[NEWS] ACTION_GET_NEWS_HIGHLIGHT';
const getNewsHighlight = (params) => {
  return {
    type: ACTION_GET_NEWS_HIGHLIGHT,
    payload: params,
  };
};

const ACTION_GET_NEWS_HIGHLIGHT_SUCCESS =
  '[NEWS] ACTION_GET_NEWS_HIGHLIGHT_SUCCESS';
const getNewsHighlightSuccess = (response) => {
  return {
    type: ACTION_GET_NEWS_HIGHLIGHT_SUCCESS,
    payload: response,
  };
};

const ACTION_GET_NEWS_HIGHLIGHT_FAILD =
  '[NEWS] ACTION_GET_NEWS_HIGHLIGHT_FAILD';
const getNewsHighlightFaild = (response) => {
  return {
    type: ACTION_GET_NEWS_HIGHLIGHT_FAILD,
    payload: response,
  };
};

export {
  ACTION_GET_DATA,
  getData,
  ACTION_GET_DATA_SUCCESS,
  getDataSuccess,
  ACTION_GET_DATA_FAILD,
  getDataFaild,
  ACTION_GET_NEWS_HIGHLIGHT,
  getNewsHighlight,
  ACTION_GET_NEWS_HIGHLIGHT_SUCCESS,
  getNewsHighlightSuccess,
  ACTION_GET_NEWS_HIGHLIGHT_FAILD,
  getNewsHighlightFaild,
};
