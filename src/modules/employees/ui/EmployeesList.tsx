import { FC } from 'react'
import EmployeesItem from './EmployeesItem'
import InviteEmployee from './InviteEmployee'
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, employeesSelector } from '../model/employee.slice';

const EmployeesList: FC = () => {
  const dispatch = useDispatch()
  const employees = useSelector(employeesSelector)

  const handleChange = (value: string) => {
    dispatch(addEmployee({
      full_name: value,
      avatarsrc: '',
      job_title: 'В ожидании',
      isActive: false,
    }))
  };
  return (
    <>
      <div className="flex flex-col gap-6">
        {employees?.map((item, index) => (
          <EmployeesItem key={index} item={item} />
        ))}
      </div>
      <InviteEmployee handleChange={handleChange}/>
    </>
  );
};

export default EmployeesList;
