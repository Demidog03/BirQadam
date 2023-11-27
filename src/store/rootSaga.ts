import { all } from 'redux-saga/effects'
import { authSaga } from '@/modules/auth/model/auth.saga.ts';

export function* rootSaga() {
  yield all([authSaga()])
}