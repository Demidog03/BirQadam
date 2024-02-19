import { FC } from 'react'
import ManagerEmployeesList from '@/modules/employees/ui/ManagerEmployeesList.tsx'
import SearchInput from '@/shared/ui/SearchInput.tsx'
import { BiSearch } from 'react-icons/bi'

const EmployeesPage: FC = () => {
  return (
    <div>
      <SearchInput leftContent={<BiSearch className="text-[24px]" />} placeholder="Search by name, email, or team" className=""/>
      <ManagerEmployeesList/>
    </div>
  )
}

export default EmployeesPage
