import { FC } from 'react';
import ManagerEmployeesList from '@/modules/employees/ui/ManagerEmployeesList.tsx'
import SearchInput from '@/shared/ui/SearchInput.tsx'
import { BiSearch } from 'react-icons/bi'
import EmployeesList from '@/modules/employees/ui/EmployeesList';

const EmployeesPage: FC = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full max-w-[960px] px-3 py-6 m-auto flex flex-col justify-between">
        <h1 className="text-4xl text-[#0d141c] font-black py-4 px-3 max-[430px]:text-2xl">Все сотрудники</h1>
        <div className='ml-6 max-[430px]:ml-1'>
          <SearchInput leftContent={<BiSearch className="text-[24px] max-[430px]:text-[18px]" />} placeholder="Поиск по именам, почте и команде" className="max-[430px]:text-[12px] max-[430px]:px-8"/>
        </div>
        <ManagerEmployeesList/>
        <EmployeesList/>
      </div>
    </div>
  );
};

export default EmployeesPage;