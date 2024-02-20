import { FC } from 'react'
import EmployeesItem from './EmployeesItem'
import data from './data/data.json'


const EmployeesList: FC = () => {
  return (
    <div className='flex flex-col gap-6'>
      {data.map((item, index) => <EmployeesItem key={index}  item={item}/>)}
    </div>
  ) 
}

export default EmployeesList