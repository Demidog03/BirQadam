import { FC } from 'react';
import SearchInputWithIcon from '@/shared/ui/SearchInputWithIcon';

const EmployeesSearch: FC = () => {

  return (
    <SearchInputWithIcon
      className="w-full rounded-[10px] focus:text-slate-900 placeholder:focus:text-sky-700 text-sm font-medium"
      placeholder= "Поиск по именам, почте и команде"
    />
  );
};

export default EmployeesSearch;