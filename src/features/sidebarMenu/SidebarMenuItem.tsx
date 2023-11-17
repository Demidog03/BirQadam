import { FC } from 'react';
import { Button } from '@/shared/shadcnUI/button.tsx';
import { TSidebarMenuItem } from '@/features/sidebarMenu/model.ts';
import { useNavigate } from 'react-router-dom';

const SidebarMenuItem: FC<TSidebarMenuItem> = ({ isActive, text, icon, routeName }) => {
  const navigate = useNavigate()
  return (
    <Button
      className={`${isActive ? 'bg-sky-600 bg-opacity-10 text-sky-600' : 'bg-transparent text-[#5D7285]'} text-lg font-semibold hover:bg-sky-600 hover:bg-opacity-5 rounded-[10px]`}
      onClick={() => { navigate('/' + routeName); }}
    >
      {icon} {text}
    </Button>
  )
}

export default SidebarMenuItem