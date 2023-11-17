import {memo, useEffect, useState} from 'react';
import usePathnameSegments from '@/shared/lib/hooks/usePathnameSegments.tsx';
import { TSidebarMenuItem } from '@/features/sidebarMenu/model.ts';
import { BiSolidBriefcase, BiSolidHomeAlt2, BiSolidUser } from 'react-icons/bi';
import SidebarMenuItem from '@/features/sidebarMenu/SidebarMenuItem.tsx';

const initialSidebarMenuItems: TSidebarMenuItem[] = [
  {
    icon: <BiSolidHomeAlt2 />,
    isActive: false,
    text: 'Home',
    routeName: 'home'
  },
  {
    icon: <BiSolidBriefcase />,
    isActive: false,
    text: 'CV',
    routeName: 'cv'
  },
  {
    icon: <BiSolidUser />,
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
      <div>
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