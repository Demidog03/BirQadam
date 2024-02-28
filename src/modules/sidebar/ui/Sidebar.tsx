import { memo, useEffect, useRef, useState } from 'react';
import { BiSolidBriefcase, BiSolidHomeAlt2, BiSolidUser } from 'react-icons/bi';
import usePathnameSegments from '@/shared/lib/hooks/usePathnameSegments.tsx';
import SidebarMenuItem, { TSidebarMenuItem } from '@/modules/sidebar/ui/SidebarMenuItem.tsx';
import { useDispatch } from 'react-redux';
import { setSidebarWidth } from '@/modules/sidebar/model/sidebar.slice.ts';

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
    routeName: 'api'
  },
];

const Sidebar = memo(() => {
  {
    const dispatch = useDispatch()
    const sidebarRef = useRef<HTMLDivElement | null>(null)
    const pathnameSegments = usePathnameSegments();
    const [sidebarMenuItems, setSidebarMenuItems] = useState<TSidebarMenuItem[]>(initialSidebarMenuItems);

    useEffect(() => {
      const updatedItems = initialSidebarMenuItems.map(item => ({
        ...item,
        isActive: pathnameSegments[0] === item.routeName,
      }));
      setSidebarMenuItems(updatedItems);
    }, [pathnameSegments]);

    useEffect(() => {
      if (sidebarRef.current?.clientWidth) {
        dispatch(setSidebarWidth(sidebarRef.current.clientWidth))
      }
    }, [dispatch, sidebarRef]);

    return (
      <div ref={sidebarRef} className="flex flex-col pl-2 pr-4 pt-[30px] pb-[34px] gap-4 border-r border-[#F7F9FC] shadow-[3px_0px_40px_0px_rgba(87,156,216,0.10)] z-10">
        <h1 className="text-2xl text-sky-700 font-semibold ml-4 mb-4">OneStep</h1>
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