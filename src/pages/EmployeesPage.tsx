import CourseDashboard from '@/modules/courses/ui/dashboard/CourseDashboard';
import EmployeesSearch from '@/modules/employees/ui/EmployeesSearch';
import Navbar from '@/modules/navbar/ui/Navbar';
import { FC } from 'react';

const EmployeesPage: FC = () => {
  return (
    <div className="w-full h-full">
      <Navbar/>
      <div className="w-full max-w-[960px] px-20 py-6 m-auto flex flex-col justify-between">
        <h1 className="text-4xl text-[#0d141c] font-black py-4">Все сотрудники</h1>
        <EmployeesSearch/>
      </div>
    </div>
  );
};

export default EmployeesPage;