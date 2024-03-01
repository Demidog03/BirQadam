import { memo, useEffect, useRef, useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import usePathnameSegments from '@/shared/lib/hooks/usePathnameSegments.tsx';
import SidebarMenuItem, { TSidebarMenuItem } from '@/modules/sidebar/ui/SidebarMenuItem.tsx';
import { useDispatch } from 'react-redux';
import { setSidebarWidth, sidebarSelector } from '@/modules/sidebar/model/sidebar.slice.ts';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/shadcnUI/accordion';
import SidebarCompanyLogo from './SidebarCompanyLogo';
import { useSelector } from '@/store';
import { companySelector } from '@/modules/company/model/company.slice';
import { profileSelector } from '@/modules/profile/model/profile.slice';

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
    const company = useSelector(companySelector);
    const user = useSelector(profileSelector);
    const sidebar = useSelector(sidebarSelector);

    const handleClick = () => {
      if (sidebar?.width) {
        dispatch(setSidebarWidth(sidebar.width <= 80 ? 260 : 80))
      }
    }

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
      <Accordion ref={sidebarRef} type="single" collapsible defaultValue="item-1" className='relative'>
        <AccordionItem value="item-1" className='flex flex-col min-w-[80px] max-w-[260px] pl-4 pr-4 pt-[20px] pb-[34px] gap-6 shadow-[3px_0px_40px_0px_rgba(87,156,216,0.10)] z-10'>
          <div className='flex mb-8 cursor-default'>
            <SidebarCompanyLogo imageSrc={company?.logo ? company.logo : ''}/>
            <AccordionContent className='ml-3'>
              <h2 className='text-base font-medium'>{company?.name}</h2>
              <h2 className='text-sm font-normal text-[#4f7596] whitespace-nowrap'>{user?.firstName + ' ' + user?.lastName}</h2>
            </AccordionContent>
          </div>
          {sidebarMenuItems.map((item) => (
            <SidebarMenuItem
              key={item.routeName}
              icon={item.icon}
              isActive={item.isActive}
              text={<AccordionContent className='w-[170px] flex justify-start'>{item.text}</AccordionContent>}
              routeName={item.routeName}
            />
          ))}
          <AccordionTrigger onClick={handleClick} className='absolute right-0 top-[80px] border border-[#0369a1] rounded-full translate-x-1/2'></AccordionTrigger>
        </AccordionItem>
      </Accordion>
    );
  }
})

export default Sidebar