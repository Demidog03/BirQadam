import {
  authorize,
  clearTokens,
  fetchLogout,
  login,
  register, sendCode,
  setAuthLoading, setRegisterStep, setTempUserId
} from '@/modules/auth/model/auth.slice.ts';
import { put, call, takeLeading } from 'redux-saga/effects'
import { ResponseType } from '@/shared/lib/types.ts'
import { loginApi, registerApi, sendCodeApi } from '@/modules/auth/api/auth.api.ts';
import { toast } from '@/shared/shadcnUI/use-toast.tsx';
import { clearProfile } from '@/modules/profile/model/profile.slice.ts';

function* loginSaga(action: ReturnType<typeof login>) {
  try {
    yield put(setAuthLoading({ actionType: action.type, isLoading: true }))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: ResponseType<ReturnType<typeof loginApi>> = yield call(loginApi, action.payload)
    if(response.data.access_token && response.data.refresh_token) {
      localStorage.setItem('token', JSON.stringify(
        {
          token: {
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token
          }
        }
      ))
    }
    yield put(authorize({
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token
    }))
  }
  catch { /* empty */ }
  finally {
    yield put(setAuthLoading({ actionType: action.type, isLoading: false }))
  }
}

function* registerSaga(action: ReturnType<typeof register>) {
  try {
    yield put(setAuthLoading({ actionType: action.type, isLoading: true }))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: ResponseType<ReturnType<typeof registerApi>> = yield call(registerApi, {
      job_title: action.payload.post,
      birth_date: action.payload.dateOfBirth,
      email: action.payload.email,
      password: action.payload.password,
      password_repeat: action.payload.repeatPassword,
      first_name: action.payload.firstName,
      last_name: action.payload.lastName
    })
    toast({
      variant: 'default',
      title: 'Проверьте вашу почту!',
    })
    yield put(setRegisterStep(1))
    yield put(setTempUserId(response.data.id))
  }
  catch { /* empty */ }
  finally {
    yield put(setAuthLoading({ actionType: action.type, isLoading: false }))
  }
}

function* sendCodeSaga(action: ReturnType<typeof sendCode>) {
  try {
    yield put(setAuthLoading({ actionType: action.type, isLoading: true }))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: ResponseType<ReturnType<typeof sendCodeApi>> = yield call(sendCodeApi, {
      code: action.payload.code,
      user_id: action.payload.userId
    })
    if(response.data.access_token && response.data.refresh_token) {
      localStorage.setItem('token', JSON.stringify(
        {
          token: {
            accessToken: response.data.access_token,
            refreshToken: response.data.refresh_token
          }
        }
      ))
    }
    yield put(authorize({
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token
    }))
    yield put(setTempUserId(null))
  }
  catch { /* empty */ }
  finally {
    yield put(setAuthLoading({ actionType: action.type, isLoading: false }))
  }
}

function* fetchLogoutSaga() {
  try {
    yield put(clearTokens())
    yield put(clearProfile())
    localStorage.removeItem('token')
  }
  catch { /* empty */ }
  finally { /* empty */ }
}

export function* authSaga() {
  yield takeLeading(login.type, loginSaga)
  yield takeLeading(register.type, registerSaga)
  yield takeLeading(fetchLogout.type, fetchLogoutSaga)
  yield takeLeading(sendCode.type, sendCodeSaga)
}