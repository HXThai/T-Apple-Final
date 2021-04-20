import * as actions from '../Action/salesAction';

const initialSalesState = {
  isErrorSales: false,
  responseSales: null,
  loadingSales: false,
  msgSales: null,
};

const salesReducer = (state = initialSalesState, action) => {
  switch (action.type) {
    case actions.ACTION_GET_SALES:
      return {
        ...state,
        isErrorSales: false,
        responseSales: null,
        loadingSales: true,
        msgSales: null,
      };

    case actions.ACTION_GET_SALES_SUCCESS:
      return {
        ...state,
        isErrorSales: false,
        responseSales: action.payload,
        loadingSales: false,
        msgSales: null,
      };

    case actions.ACTION_GET_SALES_FAIL:
      return {
        ...state,
        isErrorSales: true,
        responseSales: null,
        loadingSales: false,
        msgSales: action.payload,
      };

    case actions.ACTION_GET_SALES_HIGHLIGHT:
      return {
        ...state,
        isErrorSales: false,
        responseSales: null,
        loadingSales: true,
        msgSales: null,
      };

    case actions.ACTION_GET_SALES_HIGHLIGHT_SUCCESS:
      return {
        ...state,
        isErrorSales: false,
        responseSales: action.payload,
        loadingSales: false,
        msgSales: null,
      };

    case actions.ACTION_GET_SALES_HIGHLIGHT_FAILD:
      return {
        ...state,
        isErrorSales: true,
        responseSales: null,
        loadingSales: false,
        msgSales: action.payload,
      };
    default:
      return state;
  }
};

export default salesReducer;
