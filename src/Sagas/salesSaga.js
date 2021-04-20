import services from '../Redux/Service/saleService';
import {put, call, takeLatest} from 'redux-saga/effects';
import * as actions from '../Redux/Action/salesAction';

export function* getListSales(params) {
  try {
    let data = yield call(services.getListSales, params.payload);
    yield put(actions.getSalesSuccess(data.data));
  } catch (error) {
    yield put(actions.getSalesFaild(error.message));
  }
}

export function* getListSalesHighlight(params) {
  try {
    let data = yield call(services.getListSalesHightlight, params.payload);
    yield put(actions.getSalesHighlightSuccess(data.data));
  } catch (error) {
    yield put(actions.getSalesHighlightFaild(error.message));
  }
}

export function* watchSales() {
  yield takeLatest(actions.ACTION_GET_SALES, getListSales);
  yield takeLatest(actions.ACTION_GET_SALES_HIGHLIGHT, getListSalesHighlight);
}
