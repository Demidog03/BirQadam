import { memo, useEffect, useRef, useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import usePathnameSegments from '@/shared/lib/hooks/usePathnameSegments.tsx';
import SidebarMenuItem, { TSidebarMenuItem } from '@/modules/sidebar/ui/SidebarMenuItem.tsx';
import { useDispatch } from 'react-redux';
import { setSidebarWidth } from '@/modules/sidebar/model/sidebar.slice.ts';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/shadcnUI/accordion';

const initialSidebarMenuItems: TSidebarMenuItem[] = [
  {
    icon: <MdDashboard className="w-6 h-6"/>,
    isActive: false,
    text: 'Главная',
    routeName: 'home'
  },
  {
    icon: <MdDashboard className="w-6 h-6"/>,
    isActive: false,
    text: 'Команды',
    routeName: 'teams'
  },
  {
    icon: <MdDashboard className="w-6 h-6"/>,
    isActive: false,
    text: 'Сотрудники',
    routeName: 'employees'
  },
  {
    icon: <MdDashboard className="w-6 h-6"/>,
    isActive: false,
    text: 'Курсы',
    routeName: 'courses'
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
      <Accordion type="single" collapsible className='relative'>
        <AccordionItem ref={sidebarRef} value="item-1" className='flex flex-col pl-2 pr-4 pt-[20px] pb-[34px] gap-6 border-r border-[#F7F9FC] shadow-[3px_0px_40px_0px_rgba(87,156,216,0.10)] z-10'>
          <h1 className="text-2xl text-sky-700 font-semibold ml-4 mb-8">O</h1>
          {sidebarMenuItems.map((item) => (
            <SidebarMenuItem
              key={item.routeName}
              icon={item.icon}
              isActive={item.isActive}
              text={<AccordionContent className='mr-4'>{item.text}</AccordionContent>}
              routeName={item.routeName}
            />
          ))}
          <AccordionTrigger className='absolute mb-[-24px] right-0 top-[70px] border border-[#0369a1] rounded-full translate-x-1/2'></AccordionTrigger>
        </AccordionItem>
      </Accordion>
    );
  }
})

export default Sidebar