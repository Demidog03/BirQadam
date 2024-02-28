import { FC } from 'react';
import HelpIcon from './HelpIcon';
import ProfileMenu from '@/modules/header/ui/ProfileMenu.tsx';

const Menu: FC = () => {
  return (
    <div className=" items-center gap-2.5 hidden lg:flex">
      <HelpIcon />
      <ProfileMenu/>
    </div>
  );
};

export default Menu;
