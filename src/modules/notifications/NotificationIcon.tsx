import { FC } from 'react';
import { BiBell } from 'react-icons/bi';

const NotificationIcon: FC = () => {
  return (
    <div className="cursor-pointer">
      <BiBell className="w-[24px] h-[28px] text-sky-700"/>
    </div>
  );
};

export default NotificationIcon;
