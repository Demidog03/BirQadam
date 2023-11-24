import {login, setLoading} from '@/modules/auth/model/auth.slice.ts';
import { put } from 'redux-saga/effects'

function* loginSaga(action: ReturnType<typeof login>) {
  try {
    yield put(setLoading(true))

  }
  catch { /* empty */ }
  finally {
    
  }
}