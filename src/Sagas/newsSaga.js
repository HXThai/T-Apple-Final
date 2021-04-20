import services from '../Redux/Service/newsService';
import {put, call, takeLatest} from 'redux-saga/effects';
import * as actions from '../Redux/Action/newsAction';

export function* getListNews(params) {
  try {
    let data = yield call(services.getListNews, params.payload);
    yield put(actions.getDataSuccess(data.data));
  } catch (error) {
    yield put(actions.getDataFaild(error.message));
  }
}

export function* getListNewsHighlight(params) {
  try {
    let data = yield call(services.getListNewsHightlight, params.payload);
    yield put(actions.getNewsHighlightSuccess(data.data));
  } catch (error) {
    yield put(actions.getNewsHighlightFaild(error.message));
  }
}

export function* watchNews() {
  yield takeLatest(actions.ACTION_GET_DATA, getListNews);
  yield takeLatest(actions.ACTION_GET_NEWS_HIGHLIGHT, getListNewsHighlight);
}
