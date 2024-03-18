
import { COLORS } from '@/shared/lib/constants';
import { Avatar } from 'antd';
import { FC } from 'react';
import { BiMailSend } from 'react-icons/bi';
interface AvatarInterface {
  isActive?: boolean
  imageSrc: string
  firstName: string
  lastName: string
}

const AvatarEmployee: FC<AvatarInterface> = ({ isActive = false, imageSrc, firstName, lastName }) => {
  return (
    <div style={{ width: '56px', height: '56px', position: 'relative' }}>
      {isActive && <div  style={{ backgroundColor: COLORS.ONLINE, position: 'absolute', right: 0, bottom: 0, borderRadius: '50%', width:'13px', height: '13px', zIndex: 10 }}></div>}
      <Avatar src={imageSrc} size={60} style={{ transform: '0' }}>
        {lastName == '' ? <BiMailSend/> : firstName[0] + lastName[0]}
      </Avatar>

        
    </div>
    
  )
}

export default AvatarEmployee