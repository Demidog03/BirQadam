import { FC } from 'react'
import EmployeesItem from './EmployeesItem'
import InviteEmployee from './InviteEmployee'
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, employeesSelector } from '../model/employee.slice';
import { Flex } from 'antd';

const EmployeesList: FC = () => {
  const dispatch = useDispatch()
  const employees = useSelector(employeesSelector)

  const handleChange = (value: string) => {
    dispatch(addEmployee({
      fullName: value,
      avatarSrc: '',
      jobTitle: 'В ожидании',
      isActive: false,
    }))
  };
  return (
    <>
      <Flex vertical gap={'24px'}>
        {employees?.map((item, index) => (
          <EmployeesItem key={index} item={item} />
        ))}
      </Flex>
      <InviteEmployee handleChange={handleChange}/>
    </>
  );
};

export default EmployeesList;
