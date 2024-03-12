import { call, put, takeLeading } from 'redux-saga/effects';
import { setCompanyLoading } from '@/modules/company/model/company.slice';
import { toast } from '@/shared/shadcnUI/use-toast.tsx';
import { inviteEmployeApi } from '../api/employees.api';
import { ResponseType } from '@/shared/lib/types.ts';
import { inviteEmploueAction, inviteEmplouee } from './emloueeSliseInvite';

function* inviteEmploueeSaga(action: ReturnType<typeof inviteEmploueAction>) {
  try {
    yield put(setCompanyLoading({ actionType: action.type, isLoading: true }));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: ResponseType<ReturnType<typeof inviteEmployeApi>> =
      yield call(inviteEmployeApi, {
        recipient_email: action.payload.recipient_email,
        invite_type: action.payload.invite_type,
        team_id: action.payload.team_id,
        company_id: action.payload.company_id    
      });
    toast({
      variant: 'default',
      title: 'Приглашение отправлено',
    });
    yield put(
      inviteEmplouee({
        recipient_email: response.data.recipient_email,
        //token: response.data.token,
        invite_type: response.data.invite_type,
        team_id: response.data.team_id,
        company_id: response.data.company_id,
        id: response.data.id
      })
    );
  } catch {
    /* empty */
  } finally {
    yield put(setCompanyLoading({ actionType: action.type, isLoading: false }));
  }
}

export function* inviteEmploueeSagaa() {
  yield takeLeading(inviteEmploueAction.type, inviteEmploueeSaga);
}