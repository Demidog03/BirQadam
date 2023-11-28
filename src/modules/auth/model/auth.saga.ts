import {
  addAuthError,
  authorize,
  clearTokens,
  fetchLogout,
  login,
  register,
  removeAuthError,
  setAuthLoading
} from '@/modules/auth/model/auth.slice.ts';
import { put, call, takeLeading } from 'redux-saga/effects'
import { ResponseType } from '@/shared/lib/types.ts'
import { loginApi, registerApi } from '@/modules/auth/api/auth.api.ts';
import { toast } from '@/shared/shadcnUI/use-toast.tsx';
import { clearProfile } from '@/modules/profile/model/profile.slice.ts';
import { isAxiosError } from 'axios';

function* loginSaga(action: ReturnType<typeof login>) {
  try {
    yield put(setAuthLoading(true))
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
    yield put(setAuthLoading(false))
  }
}

function* registerSaga(action: ReturnType<typeof register>) {
  try {
    yield put(setAuthLoading(true))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    yield call(registerApi, {
      username: action.payload.username,
      email: action.payload.email,
      password: action.payload.password,
      password_repeat: action.payload.repeatPassword,
      first_name: action.payload.firstName,
      last_name: action.payload.lastName
    })
    toast({
      variant: 'default',
      title: 'Account created successfully',
      description: 'Please, log in to your new account.'
    })
    yield put(removeAuthError({ actionType: action.type }))
  }
  catch (err: unknown) {
    if (isAxiosError(err)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
      yield put(addAuthError({ actionType: action.type, message: err.response?.data.message || 'Server Error' }));
    }
  }
  finally {
    yield put(setAuthLoading(false))
  }
}

function* fetchLogoutSaga() {
  try {
    yield put(setAuthLoading(true))
    yield put(clearTokens())
    yield put(clearProfile())
    localStorage.removeItem('token')
  }
  catch { /* empty */ }
  finally {
    yield put(setAuthLoading(false))
  }
}

export function* authSaga() {
  yield takeLeading(login.type, loginSaga)
  yield takeLeading(register.type, registerSaga)
  yield takeLeading(fetchLogout.type, fetchLogoutSaga)
}