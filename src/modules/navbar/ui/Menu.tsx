import { FC } from 'react';
import HelpIcon from './HelpIcon';
import ProfileMenu from '@/modules/profile/ui/ProfileMenu.tsx';
import { Flex } from 'antd';

const Menu: FC = () => {
  return (
    <Flex align='center' gap={14}>
      <HelpIcon />
      <ProfileMenu/>
    </Flex>
  );
};

export default Menu;
