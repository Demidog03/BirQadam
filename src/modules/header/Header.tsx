import { FC } from 'react'
import { CourseSearchBar } from '../courses/CourseSearchBar';
import NotificationIcon from '@/modules/notifications/NotificationIcon.tsx';
import Avatar from '@/modules/profile/ui/Avatar.tsx';



const Header: FC = () => {
  return (
    <header className="w-full bg-white px-[50px] py-4 flex justify-between items-center">
      <CourseSearchBar/>
      <div className="flex items-center gap-2.5">
        <NotificationIcon/>
        <Avatar imageSrc="some_link" firstName="Otep" lastName="Olzhas"/>
      </div>
    </header>
  );
};

export default Header;