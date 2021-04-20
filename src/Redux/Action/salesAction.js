const ACTION_GET_SALES = '[SALES] ACTION_SALES';
const getSales = (params) => {
  return {
    type: ACTION_GET_SALES,
    payload: params,
  };
};

const ACTION_GET_SALES_SUCCESS = '[SALES] ACTION_SALES_SUCCESS';
const getSalesSuccess = (response) => {
  return {
    type: ACTION_GET_SALES_SUCCESS,
    payload: response,
  };
};

const ACTION_GET_SALES_FAILD = '[SALES] ACTION_SALES_FAILD';
const getSalesFaild = (response) => {
  return {
    type: ACTION_GET_SALES_FAILD,
    payload: response,
  };
};

const ACTION_GET_SALES_HIGHLIGHT = '[SALES] ACTION_SALES_HIGHLIGHT';
const getSalesHighlight = (params) => {
  return {
    type: ACTION_GET_SALES_HIGHLIGHT,
    payload: params,
  };
};

const ACTION_GET_SALES_HIGHLIGHT_SUCCESS =
  '[SALES] ACTION_SALES_HIGHLIGHT_SUCCESS';
const getSalesHighlightSuccess = (response) => {
  return {
    type: ACTION_GET_SALES_HIGHLIGHT_SUCCESS,
    payload: response,
  };
};

const ACTION_GET_SALES_HIGHLIGHT_FAILD = '[SALES] ACTION_SALES_HIGHLIGHT_FAILD';
const getSalesHighlightFaild = (response) => {
  return {
    type: ACTION_GET_SALES_HIGHLIGHT_FAILD,
    payload: response,
  };
};

export {
  ACTION_GET_SALES,
  getSales,
  ACTION_GET_SALES_SUCCESS,
  getSalesSuccess,
  ACTION_GET_SALES_FAILD,
  getSalesFaild,
  ACTION_GET_SALES_HIGHLIGHT,
  getSalesHighlight,
  ACTION_GET_SALES_HIGHLIGHT_SUCCESS,
  getSalesHighlightSuccess,
  ACTION_GET_SALES_HIGHLIGHT_FAILD,
  getSalesHighlightFaild,
};
