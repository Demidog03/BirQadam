import { call, put, takeLeading } from 'redux-saga/effects';
import { setCompanyLoading } from '@/modules/company/model/company.slice';
import { toast } from '@/shared/shadcnUI/use-toast.tsx';
import { inviteEmployeeApi } from '../api/employees.api';
import { inviteEmployeeAction } from './employee.slice';

function* inviteEmployeeSaga(action: ReturnType<typeof inviteEmployeeAction>) {
  try {
    yield put(setCompanyLoading({ actionType: action.type, isLoading: true }));
    yield call(inviteEmployeeApi, {
      recipient_email: action.payload.recipientEmail,
      invite_type: action.payload.inviteType,
      team_id: action.payload.teamId,
      company_id: action.payload.companyId    
    });
    toast({
      variant: 'default',
      title: 'Приглашение отправлено',
    });
  } catch {
    /* empty */
  } finally {
    yield put(setCompanyLoading({ actionType: action.type, isLoading: false }));
  }
}

export function* employeeSaga() {
  yield takeLeading(inviteEmployeeAction.type, inviteEmployeeSaga);
}