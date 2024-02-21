import { FC } from 'react'
import AvatarEmployee from './AvatarEmployee'
import { Employee } from '../model/employee.types'

interface ItemInterface {
  item:Employee
}

const EmployeesItem: FC<ItemInterface> = ({ item }) => {
  return (
    <div className='flex justify-between items-center w-full'>
      <div className='flex items-center px-3'>
        <AvatarEmployee
          imageSrc={item.avatarsrc}
          firstName={item.full_name.split(' ')[0] || ''}
          lastName={item.full_name.split(' ')[1] || ''}
          isActive={item.isActive}
        />
        <div className='pl-6 max-[430px]:pl-3'>
          <h2 className='font-medium text-base max-[430px]:text-[12px] text-wrap'>{item.full_name}</h2>
          <p className='font-normal text-sm text-[#4f7596] max-[430px]:text-[10px]'>{item.job_title}</p>
        </div>
      </div>
      <div><span>...</span></div>
    </div>
  )
}

export default EmployeesItem