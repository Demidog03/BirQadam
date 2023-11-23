import { FC } from 'react'
import { CourseSearchBar } from '@/features/course';
import { NotificationIcon } from '@/entities/notification';
import { Avatar } from '@/entities/profile';

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