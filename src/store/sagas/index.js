// takeEvery function will us to listen to a certain actions, and do something when they occur.

import { takeEvery } from 'redux-saga/effects';
import { logoutSaga } from './auth';
import * as actionTypes from '../actions/actionTypes';

// to use takeEvery, we need to create another generator function.
//we yeild takeEvery, and its passed two actions.  the action we want to listen to and the action we want to dispatch after.

// function explaination:
  // whenever we execute the generator => we set up a listener, in this case AUTH_INITIATE_LOGOUT, => and then execute logoutSaga whenever the listener appears.
  // we need to export this file, beucase we will be adding it in the index file.
export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga)
}
