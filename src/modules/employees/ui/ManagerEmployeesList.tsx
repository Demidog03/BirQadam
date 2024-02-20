import { FC } from 'react'
import { Button } from '@/shared/shadcnUI/button.tsx'

const ManagerEmployeesList: FC = () => {
  return (
    <div className='py-4'>
      <Button variant={'outline'} className='hover:text-[#4f7596]'>Все</Button>
      <Button variant={'outline'} className='hover:text-[#4f7596]'>Активные</Button>
      <Button variant={'outline'} className='hover:text-[#4f7596]'>Приглашенные</Button>
      <Button variant={'outline'} className='hover:text-[#4f7596]'>В ожидании</Button>
    </div>
  )
}

export default ManagerEmployeesList
