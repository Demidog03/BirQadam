import { memo, useEffect, useState } from 'react';
import { BiSolidBriefcase, BiSolidHomeAlt2, BiSolidUser } from 'react-icons/bi';
import usePathnameSegments from '@/shared/lib/hooks/usePathnameSegments.tsx';
import SidebarMenuItem, { TSidebarMenuItem } from '@/modules/sidebar/SidebarMenuItem.tsx';

const initialSidebarMenuItems: TSidebarMenuItem[] = [
  {
    icon: <BiSolidHomeAlt2 className="w-5 h-5"/>,
    isActive: false,
    text: 'Home',
    routeName: 'home'
  },
  {
    icon: <BiSolidBriefcase className="w-5 h-5"/>,
    isActive: false,
    text: 'CV',
    routeName: 'cv'
  },
  {
    icon: <BiSolidUser className="w-5 h-5"/>,
    isActive: false,
    text: 'Profile',
    routeName: 'profile'
  },
];

const Sidebar = memo(() => {
  {
    const pathnameSegments = usePathnameSegments();
    const [sidebarMenuItems, setSidebarMenuItems] = useState<TSidebarMenuItem[]>(initialSidebarMenuItems);

    useEffect(() => {
      const updatedItems = initialSidebarMenuItems.map(item => ({
        ...item,
        isActive: pathnameSegments[0] === item.routeName,
      }));
      setSidebarMenuItems(updatedItems);
    }, [pathnameSegments]);

    return (
      <div className="flex flex-col pl-2 pr-4 pt-[30px] pb-[34px] gap-4 border-r border-[#F7F9FC] shadow-[3px_0px_40px_0px_rgba(87,156,216,0.10)] z-10">
        <h1 className="text-2xl text-sky-700 font-semibold ml-4 mb-4">BirQadam</h1>
        {sidebarMenuItems.map((item) => (
          <SidebarMenuItem
            key={item.routeName}
            icon={item.icon}
            isActive={item.isActive}
            text={item.text}
            routeName={item.routeName}
          />
        ))}
      </div>
    );
  }
})

export default Sidebar