import { FC } from 'react';
import ManagerEmployeesList from '@/modules/employees/ui/ManagerEmployeesList.tsx'
import EmployeesList from '@/modules/employees/ui/EmployeesList';
import SearchInput2 from '@/shared/ui/SearchInput2';

const EmployeesPage: FC = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full px-3 py-6 m-auto flex flex-col justify-between">
        <h1 className="text-4xl text-[#0d141c] font-black py-4 px-3 max-[430px]:text-2xl">Все сотрудники</h1>
        <div className='ml-2'>
          <SearchInput2/>
        </div>
        <div style={{ width: '100%', marginLeft: '20px' }}>
          <ManagerEmployeesList/>
          <EmployeesList/>
        </div>

      </div>
    </div>
  );
};

export default EmployeesPage;