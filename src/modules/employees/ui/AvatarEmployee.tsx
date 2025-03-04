import { Avatar as AvatarIcon, AvatarFallback, AvatarImage } from '@/shared/shadcnUI/avatar.tsx'
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
    <div className="w-[56px] h-[56px] relative max-[430px]:w-[50px] max-[430px]:h-[50px]">
      {isActive && <div className='absolute right-0 bottom-0 rounded-full bg-[green] w-[13px] h-[13px] z-10'></div>}
      <AvatarIcon className='w-full h-full'>
        <AvatarImage className={isActive ? '' : 'grayscale'} src={imageSrc} alt="user avatar"/>
        <AvatarFallback className='bg-[#579cd8] text-[#ffffff] text-xl'>{lastName == '' ? <BiMailSend/> : firstName[0] + lastName[0]}</AvatarFallback>
      </AvatarIcon>
    </div>
    
  )
}

export default AvatarEmployee