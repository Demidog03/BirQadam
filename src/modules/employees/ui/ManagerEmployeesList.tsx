import { FC } from 'react'
import { Button } from '@/shared/shadcnUI/button.tsx'

const ManagerEmployeesList: FC = () => {
  return (
    <div className='flex flex-wrap py-4'>
      <Button variant={'outline'} className='hover:text-[#4f7596] max-[430px]:text-[12px] max-[400px]:px-1.5'>Все</Button>
      <Button variant={'outline'} className='hover:text-[#4f7596] max-[430px]:text-[12px] max-[400px]:px-1.5'>Активные</Button>
      <Button variant={'outline'} className='hover:text-[#4f7596] max-[430px]:text-[12px] max-[400px]:px-1.5'>Приглашенные</Button>
      <Button variant={'outline'} className='hover:text-[#4f7596] max-[430px]:text-[12px] max-[400px]:px-1.5'>В ожидании</Button>
    </div>
  )
}

export default ManagerEmployeesList
