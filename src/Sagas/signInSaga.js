import services from '../Redux/Service/signInService';
import {put, call, takeLatest} from 'redux-saga/effects';
import * as actions from '../Redux/Action/signInAction';
//trung gian 
export function* signIn(params) {
  try {
    let data = yield call(services.signIn, params.payload);
    yield put(actions.getUserSuccess(data.data));
  } catch (error) {
    yield put(actions.getUserFaild(error.message));
  }
}
export function* watchSignIn() {
  yield takeLatest(actions.ACTION_SIGN_IN, signIn);
}