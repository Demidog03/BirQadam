import { Button, Flex } from 'antd'
import { FC } from 'react'


const ManagerEmployeesList: FC = () => {
  return (
    <Flex wrap="wrap" style={{ paddingBottom: '16px', paddingTop: '16px' }} >
      <Button size='middle' style={{ maxWidth: '430px' }} >Все</Button>
      <Button size='middle' style={{ maxWidth: '430px' }} >Активные</Button>
      <Button size='middle' style={{ maxWidth: '430px' }} >Приглашенные</Button>
      <Button size='middle' style={{ maxWidth: '430px' }} >В ожидании</Button>
    </Flex>

  )
}

export default ManagerEmployeesList
