import { all } from 'redux-saga/effects'
import { authSaga } from '@/modules/auth/model/auth.saga.ts';
import { profileSaga } from '@/modules/profile/model/profile.saga.ts';
import { companySaga } from '@/modules/company/model/company.saga.ts';
import { inviteEmployeeSagaa } from '@/modules/employees/model/employee.saga';

export function* rootSaga() {
  yield all([authSaga(), profileSaga(), companySaga(), inviteEmployeeSagaa()])
}