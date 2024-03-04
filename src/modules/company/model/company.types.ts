import { ActionError, ActionLoading } from '@/shared/lib/types.ts';

export interface CompanyState {
  company: Company | null;
  loading: ActionLoading[];
  errors: ActionError[];
}

export interface Company {
  id: number;
  name: string;
  bin: string;
  employeeNumbers: number;
  logo: string;
}

export interface CreateCompanyPayload {
  name: string;
  bin: string;
  employeeNumbers: number;
  logo: string;
}
