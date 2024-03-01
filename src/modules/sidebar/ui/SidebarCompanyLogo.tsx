import { Avatar as AvatarIcon, AvatarFallback, AvatarImage } from '@/shared/shadcnUI/avatar.tsx'
import { FC } from 'react';

interface CompanyLogoInterface {
  imageSrc: string
}

const SidebarCompanyLogo: FC<CompanyLogoInterface> = ({ imageSrc }) => {
  return (
    <div className="w-[40px] h-[40px]">
      <AvatarIcon className='w-full h-full'>
        <AvatarImage src={imageSrc} alt="company logo"/>
        <AvatarFallback className='bg-sky-700 text-[#ffffff]'>Logo</AvatarFallback>
      </AvatarIcon>
    </div>
  )
}

export default SidebarCompanyLogo
