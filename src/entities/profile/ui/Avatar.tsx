import { Avatar as AvatarIcon, AvatarFallback, AvatarImage} from '@/shared/shadcnUI/avatar.tsx'
import { FC } from 'react';

interface AvatarInterface {
  imageSrc: string
  firstName: string
  lastName: string
}

const Avatar: FC<AvatarInterface> = ({ imageSrc, firstName, lastName }) => {
  return (
    <AvatarIcon className="cursor-pointer">
      <AvatarImage src={imageSrc} alt="user profile" />
      <AvatarFallback>{firstName[0] + lastName[0]}</AvatarFallback>
    </AvatarIcon>
  )
}

export default Avatar
