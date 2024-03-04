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
        name: action.payload.name,
        bin: action.payload.bin,
        employee_numbers: action.payload.employeeNumbers,
        logo: action.payload.logo,
      });
    toast({
      variant: 'default',
      title: `Компания "${response.data.name}" создана!`,
    });
    yield put(
      setCompany({
        id: response.data.id,
        name: response.data.name,
        bin: response.data.bin,
        employeeNumbers: response.data.employee_numbers,
        logo: response.data.logo,
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
        id: action.payload.id,
        name: action.payload.name,
        bin: action.payload.bin,
        employee_numbers: action.payload.employeeNumbers,
        logo: action.payload.logo,
      });
    toast({
      variant: 'default',
      title: `Данные компании "${response.data.name}" обновлены!`,
    });
    yield put(
      setCompany({
        id: response.data.id,
        name: response.data.name,
        bin: response.data.bin,
        employeeNumbers: response.data.employee_numbers,
        logo: response.data.logo,
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
