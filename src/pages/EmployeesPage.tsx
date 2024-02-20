import Navbar from '@/modules/navbar/ui/Navbar';
import { FC } from 'react';
import ManagerEmployeesList from '@/modules/employees/ui/ManagerEmployeesList.tsx'
import SearchInput from '@/shared/ui/SearchInput.tsx'
import { BiSearch } from 'react-icons/bi'

const EmployeesPage: FC = () => {
  return (
    <div className="w-full h-full">
      <Navbar/>
      <div className="w-full max-w-[960px] px-20 py-6 m-auto flex flex-col justify-between">
        <h1 className="text-4xl text-[#0d141c] font-black py-4">Все сотрудники</h1>
        <SearchInput leftContent={<BiSearch className="text-[24px]" />} placeholder="Search by name, email, or team" className=""/>
        <ManagerEmployeesList/>
      </div>
    </div>
  );
};

export default EmployeesPage;