// importing a helper function called delay.  the delay function delays the execution of the next step.
import { delay } from 'redux-saga';
// the put function allows us to dispatch actions  Put in the end, dispatches a new action.
import { put } from 'redux-saga/effects';
// once we inport the actions.  we no longer need to import actionTypes since we are not hard coding it.
// import * as actionTypes from '../actions/actionTypes';
// we import the actions.
import * as actions from '../actions/auth';

// a saga is kind-of like a function.
// sagas are related to actions.
// adding a star turns this function into a generator. generators are next generation JS features which are functions which can be executed incrementally. - so you can pause during function exectuion for example to wait for asych code to finish.

// this is a saga-generator function. in a generator fucnction we need to pretend each step we execute with a "yeild" keyword.  this means that each step will be executed and it will then wait for it to finish. Once a step is finished, it will go on to the next and then finally it will dispatch the action. you export the function.

// then we repalce the hardcoded "AUTH_LOGOUT" with the new action creator logoutSucceed, we then need to execute it - which has been created in the auth.js fil in the actions folder.

// we then need to add this in the index file of the actions folder.
export function* logoutSaga(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expirationDate');
  yield localStorage.removeItem('userId');
  yield put(
    actions.logoutSucceed());
}

// creating a new generator funtion for asynch code located in auth file in actions folder.
// we need to import a helper function from redux saga called 'delay'.

// function breakdown - we wait for time to expire. and then logout.
export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime);
  yield put(actions.logout());
}

// WE NOW NEED TO HOOK IT UP TO THE STORE...GO IN THE INDEX FILE.
