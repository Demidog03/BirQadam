import { put, call, takeLeading } from 'redux-saga/effects';
import { ResponseType } from '@/shared/lib/types.ts';
import { toast } from '@/shared/shadcnUI/use-toast.tsx';
import {
  createCompanyAction,
  setCompany,
  setCompanyLoading,
  updateCompanyAction,
} from '@/modules/company/model/company.slice.ts';
import {
  createCompanyApi,
  updateCompanyApi,
} from '@/modules/company/api/company.api.ts';

function* createCompanySaga(action: ReturnType<typeof createCompanyAction>) {
  try {
    yield put(setCompanyLoading({ actionType: action.type, isLoading: true }));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: ResponseType<ReturnType<typeof createCompanyApi>> =
      yield call(createCompanyApi, {
        ...action.payload,
        employee_numbers: action.payload.employeeNumbers,
      });
    toast({
      variant: 'default',
      title: `Компания "${response.data.name}" создана!`,
    });
    yield put(
      setCompany({
        ...response.data,
        employeeNumbers: response.data.employee_numbers,
      })
    );
  } catch {
    /* empty */
  } finally {
    yield put(setCompanyLoading({ actionType: action.type, isLoading: false }));
  }
}

function* updateCompanySaga(action: ReturnType<typeof updateCompanyAction>) {
  try {
    yield put(setCompanyLoading({ actionType: action.type, isLoading: true }));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: ResponseType<ReturnType<typeof updateCompanyApi>> =
      yield call(updateCompanyApi, {
        ...action.payload,
        employee_numbers: action.payload.employeeNumbers,
      });
    toast({
      variant: 'default',
      title: `Данные компании "${response.data.name}" обновлены!`,
    });
    yield put(
      setCompany({
        ...response.data,
        employeeNumbers: response.data.employee_numbers,
      })
    );
  } catch {
    /* empty */
  } finally {
    yield put(setCompanyLoading({ actionType: action.type, isLoading: false }));
  }
}

export function* companySaga() {
  yield takeLeading(createCompanyAction.type, createCompanySaga);
  yield takeLeading(updateCompanyAction.type, updateCompanySaga);
}
