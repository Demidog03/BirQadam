import { FC, ReactNode } from 'react';
import { Button } from '@/shared/shadcnUI/button.tsx';
import { useNavigate } from 'react-router-dom';

export interface TSidebarMenuItem {
  icon: ReactNode,
  isActive: boolean,
  text: string | ReactNode,
  routeName: string
}

const SidebarMenuItem: FC<TSidebarMenuItem> = ({ isActive, text, icon, routeName }) => {
  const navigate = useNavigate()
  return (
    <div className="flex gap-2 items-center">
      {isActive && <div className="w-[2.2px] bg-sky-600 h-[20px] rounded-[10px]"></div>}
      <Button
        className={`${isActive ? 'bg-sky-600 bg-opacity-5 text-sky-700' : 'bg-transparent text-[#5D7285]'} justify-start gap-2 text-lg font-semibold hover:bg-sky-600 hover:bg-opacity-10 rounded-[10px] pl-2 pr-2 `}
        onClick={() => { navigate('/' + routeName); }}
      >
        {icon} {text}
      </Button>
    </div>
  )
}

export default SidebarMenuItem