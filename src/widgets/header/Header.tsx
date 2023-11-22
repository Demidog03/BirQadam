import { FC } from 'react'
import { CourseSearchBar } from '@/features/course';
import { NotificationIcon } from '@/features/notification';
import { Avatar } from '@/features/profile';


const Header: FC = () => {
  return (
    <header className="w-full bg-white px-[50px] py-4 flex justify-between items-center">
      <CourseSearchBar/>
      <div>
        <NotificationIcon/>
        <Avatar />
      </div>
    </header>
  );
};

export default Header;