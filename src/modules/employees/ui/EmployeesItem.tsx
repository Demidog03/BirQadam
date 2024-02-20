import { FC } from 'react'
import AvatarEmployee from './AvatarEmployee'

interface Item {
  full_name: string
  avatarsrc: string
  job_title: string
  isActive: boolean
}

interface ItemInterface {
  item:Item
}

const EmployeesItem: FC<ItemInterface> = ({ item }) => {
  return (
    <div className='flex justify-between items-center w-full'>
      <div className='flex items-center px-3'>
        <AvatarEmployee imageSrc={item.avatarsrc} firstName={item.full_name.split(' ')[0]} lastName={item.full_name.split(' ')[1]} isActive={item.isActive}/>
        <div className='pl-6'>
          <h2 className='font-medium text-base'>{item.full_name}</h2>
          <p className='font-normal text-sm text-[#4f7596]'>{item.job_title}</p>
        </div>
      </div>
      <div><span>...</span></div>
    </div>
  )
}

export default EmployeesItem