import { FC } from 'react'
import AvatarEmployee from './AvatarEmployee'
import { Employee } from '../model/employee.types'
import { Flex } from 'antd'
import Title from 'antd/lib/typography/Title'
import { Typography } from 'antd';

const { Text } = Typography;

interface ItemInterface {
  item:Employee
}

const EmployeesItem: FC<ItemInterface> = ({ item }) => {
  return (
    <Flex justify='space-between' align='center' style={{ width: '96%' }}>
      <Flex align='center' style={{ paddingLeft: '12px', paddingRight: '12px' }}>
        <AvatarEmployee
          imageSrc={item.avatarSrc}
          firstName={item.fullName.split(' ')[0] || ''}
          lastName={item.fullName.split(' ')[1] || ''}
          isActive={item.isActive}
        />
        <div style={{ paddingLeft: '24px', maxWidth: '430px', }}>
          <Title level={4} style={{ margin: 0 }}>
            {item.fullName}
          </Title>
          <Text type="secondary" >{item.jobTitle}</Text>
        </div>
      </Flex>
      <div><span>...</span></div>
    </Flex>

  )
}

export default EmployeesItem