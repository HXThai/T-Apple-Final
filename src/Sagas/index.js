import {takeLatest, all} from 'redux-saga/effects';

/* ------------- Types ------------- */
import {TestTypes} from '../Redux/TestRedux';

/* ------------- Sagas ------------- */
import {test} from './TestSagas';

/* ------------- Connect Types To Sagas ------------- */

import {watchHome} from './homeSaga';
import {watchService, watchServiceHighlight} from './serviceSaga';
import {watchSales} from './salesSaga';
import {watchNews} from './newsSaga';
import {watchSignIn} from './signInSaga';

export default function* root() {
  yield all([
    watchHome(),
    watchService(),
    watchServiceHighlight(),
    watchSales(),
    watchNews(),
    watchSignIn(),
  ]);
}
