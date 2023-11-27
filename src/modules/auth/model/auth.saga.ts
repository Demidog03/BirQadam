import { authorize, login, register, setAuthLoading } from '@/modules/auth/model/auth.slice.ts';
import { put, call, takeLeading } from 'redux-saga/effects'
import { ResponseType } from '@/shared/lib/types.ts'
import { loginApi, registerApi } from '@/modules/auth/api/auth.api.ts';
import { toast } from '@/shared/shadcnUI/use-toast.tsx';

function* loginSaga(action: ReturnType<typeof login>) {
  try {
    yield put(setAuthLoading(true))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: ResponseType<ReturnType<typeof loginApi>> = yield call(loginApi, action.payload)
    if(response.data.access_token) {
      localStorage.setItem('accessToken', response.data.access_token)
    }
    yield put(authorize({
      username: '',
      email: '',
      firstName: 'Otep',
      lastName: 'Olzhas',
      token: {
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token
      }
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
  }
  catch { /* empty */ }
  finally {
    yield put(setAuthLoading(false))
  }
}

export function* authSaga() {
  yield takeLeading(login.type, loginSaga)
  yield takeLeading(register.type, registerSaga)
}