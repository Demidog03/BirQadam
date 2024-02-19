import { FC } from 'react'
import { Button } from '@/shared/shadcnUI/button.tsx'

const ManagerEmployeesList: FC = () => {
  return (
    <div>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Invited</Button>
      <Button>Pending</Button>
    </div>
  )
}

export default ManagerEmployeesList
