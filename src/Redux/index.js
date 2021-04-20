import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Sagas/index';

import homeReducer from './Reducer/homeReducer';
import serviceReducer from './Reducer/serviceReducer';
import service_highlightReducer from './Reducer/service_highlightReducer';
import salesReducer from './Reducer/salesReducer';
import newsReducer from './Reducer/newsReducer';
import signInReducer from './Reducer/signInReducer';

const rootReducer = combineReducers({
  homeReducer,
  serviceReducer,
  service_highlightReducer,
  salesReducer,
  newsReducer,
  signInReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
