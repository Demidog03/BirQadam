import { fetchProfile, setProfile, setProfileLoading } from '@/modules/profile/model/profile.slice.ts';
import { put, call, takeLeading } from 'redux-saga/effects'
import { fetchProfileApi } from '@/modules/profile/api/profile.api.ts';
import { ResponseType } from '@/shared/lib/types.ts';

function* fetchProfileSaga() {
  try {
    yield put(setProfileLoading(true))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: ResponseType<ReturnType<typeof fetchProfileApi>> = yield call(fetchProfileApi)
    yield put(setProfile({
      username: response.data.username,
      email: response.data.email,
      firstName: response.data.first_name,
      lastName: response.data.last_name,
      id: response.data.id
    }))
  }
  catch { /* empty */ }
  finally {
    yield put(setProfileLoading(false))
  }
}

export function* profileSaga() {
  yield takeLeading(fetchProfile.type, fetchProfileSaga)
}