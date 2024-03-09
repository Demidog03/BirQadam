import { put, call, takeLeading } from 'redux-saga/effects';
import { ResponseType } from '@/shared/lib/types.ts';
import { toast } from '@/shared/shadcnUI/use-toast.tsx';
import { createTeamAction, setTeam } from './teams.slice';
import { createTeamApi } from '../api/teams.api';

function* createTeamSaga(action: ReturnType<typeof createTeamAction>) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: ResponseType<ReturnType<typeof createTeamApi>> =
      yield call(createTeamApi, {
        name: action.payload.name,
        logo: action.payload.logo
      });
    toast({
      variant: 'default',
      title: `Команда "${response.data.name}" создана!`,
    });
    yield put(
      setTeam({
        id: response.data.id,
        name: response.data.name,
        logo: response.data.logo,
        company: {
          id: response.data.company.id,
          name: response.data.company.name,
          bin: response.data.company.bin,
          employeeNumbers: response.data.company.employee_numbers,
          logo: response.data.company.logo,
        }
      })
    );
  } catch {
    /* empty */
  }
}

export function* teamsSaga() {
  yield takeLeading(createTeamAction.type, createTeamSaga)
}