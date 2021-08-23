import { call, all, takeLatest, put } from '@redux-saga/core/effects';
import { clearCart } from './cart.actions';
import UserActionTypes from '../user/user.types';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
