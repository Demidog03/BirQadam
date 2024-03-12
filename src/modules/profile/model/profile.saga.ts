import {
  fetchProfile,
  setProfile,
  setProfileLoading,
  updateProfileAction
} from '@/modules/profile/model/profile.slice.ts';
import { put, call, takeLeading } from 'redux-saga/effects'
import { fetchProfileApi, updateProfileApi } from '@/modules/profile/api/profile.api.ts';
import { ResponseType } from '@/shared/lib/types.ts';
import { loginAction } from '@/modules/auth/model/auth.slice.ts';
import { setCompany } from '@/modules/company/model/company.slice.ts';

function* fetchProfileSaga(action: ReturnType<typeof loginAction>) {
  try {
    yield put(setProfileLoading({ actionType: action.type, isLoading: true }))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: ResponseType<ReturnType<typeof fetchProfileApi>> = yield call(fetchProfileApi)
    yield put(setProfile({
      id: response.data.id,
      email: response.data.email,
      firstName: response.data.first_name,
      lastName: response.data.last_name,
      birthDate: response.data.birth_date,
      jobTitle: response.data.job_title,
      team: response.data.team ? {
        ...response.data.team
      } : null,
      company: response.data.company ? {
        ...response.data.company,
        employeeNumbers: response.data.company.employee_numbers,
      } : null
    }))
    if(response.data.company) {
      yield put(setCompany({
        ...response.data.company,
        employeeNumbers: response.data.company.employee_numbers,
      }))
    }
  }
  catch { /* empty */ }
  finally {
    yield put(setProfileLoading({ actionType: action.type, isLoading: false }))
  }
}

function* updateProfileSaga(action: ReturnType<typeof updateProfileAction>) {
  try {
    yield put(setProfileLoading({ actionType: action.type, isLoading: true }));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: ResponseType<ReturnType<typeof updateProfileApi>> = yield call(updateProfileApi, action.payload);
    yield put(setProfile({
      id: response.data.id,
      email: response.data.email,
      firstName: response.data.first_name,
      lastName: response.data.last_name,
      birthDate: response.data.birth_date,
      jobTitle: response.data.job_title,
      team: response.data.team ? {
        ...response.data.team
      } : null,
      company: response.data.company ? {
        ...response.data.company,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        employeeNumbers: response.data.company.employeeNumbers,
      } : null
    }))
  }
  catch { /* empty */ }
  finally {
    yield put(setProfileLoading({ actionType: action.type, isLoading: false }));
  }
}



export function* profileSaga() {
  yield takeLeading(fetchProfile.type, fetchProfileSaga)
  yield takeLeading(updateProfileAction.type, updateProfileSaga)
}