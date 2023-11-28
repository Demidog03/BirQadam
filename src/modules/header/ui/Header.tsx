import { FC } from 'react'
import { CourseSearchBar } from '../../courses/ui/CourseSearchBar.tsx';
import NotificationIcon from '@/modules/notifications/NotificationIcon.tsx';
import ProfileMenu from '@/modules/header/ui/ProfileMenu.tsx';

const Header: FC = () => {
  return (
    <header className="w-full bg-white px-[50px] py-4 flex justify-between items-center">
      <CourseSearchBar/>
      <div className="flex items-center gap-2.5">
        <NotificationIcon/>
        <ProfileMenu/>
      </div>
    </header>
  );
};

export default Header;