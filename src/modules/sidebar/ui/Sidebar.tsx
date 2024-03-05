import { memo, useEffect, useState } from 'react';
import usePathnameSegments from '@/shared/lib/hooks/usePathnameSegments.tsx';
import SidebarMenuItem, { TSidebarMenuItem } from '@/modules/sidebar/ui/SidebarMenuItem.tsx';
import { useDispatch } from 'react-redux';
import { setSidebarOpenState, sidebarSelector } from '@/modules/sidebar/model/sidebar.slice.ts';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/shadcnUI/accordion';
import SidebarCompanyLogo from './SidebarCompanyLogo';
import { useSelector } from '@/store';
import { companySelector } from '@/modules/company/model/company.slice';
import { profileSelector } from '@/modules/profile/model/profile.slice';
import { BiSolidBriefcase, BiSolidDashboard, BiSolidGraduation, BiSolidGroup } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/shared/lib/utils';

const initialSidebarMenuItems: TSidebarMenuItem[] = [
  {
    icon: <BiSolidDashboard  className="w-6 h-6"/>,
    isActive: false,
    text: 'Главная',
    routeName: 'home'
  },
  {
    icon: <BiSolidBriefcase  className="w-6 h-6"/>,
    isActive: false,
    text: 'Команды',
    routeName: 'teams'
  },
  {
    icon: <BiSolidGroup  className="w-6 h-6"/>,
    isActive: false,
    text: 'Сотрудники',
    routeName: 'employees'
  },
  {
    icon: <BiSolidGraduation  className="w-6 h-6"/>,
    isActive: false,
    text: 'Курсы',
    routeName: 'courses'
  },
];

const Sidebar = memo(() => {
  {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const pathnameSegments = usePathnameSegments();
    const [sidebarMenuItems, setSidebarMenuItems] = useState<TSidebarMenuItem[]>(initialSidebarMenuItems);
    const company = useSelector(companySelector);
    const user = useSelector(profileSelector);
    const sidebar = useSelector(sidebarSelector);

    const handleClick = () => {
      dispatch(setSidebarOpenState(!sidebar.isOpen))
    }

    useEffect(() => {
      const updatedItems = initialSidebarMenuItems.map(item => ({
        ...item,
        isActive: pathnameSegments[0] === item.routeName,
      }));
      setSidebarMenuItems(updatedItems);
    }, [pathnameSegments]);

    return (
      <Accordion type="single" collapsible defaultValue="item-1" className='relative'>
        <AccordionItem value="item-1" className='bg-white flex flex-col min-w-[80px] max-w-[260px] pl-4 pr-4 pt-[20px] pb-[34px] gap-6 shadow-[3px_0px_40px_0px_rgba(87,156,216,0.10)] z-10 sticky h-screen top-0'>
          <div
            className={cn('flex mb-8 cursor-pointer hover:bg-sky-600 hover:bg-opacity-5 py-2 px-3 rounded-[10px]', !sidebar.isOpen && 'px-0 py-0 hover:bg-transparent')}
            onClick={() => { navigate('/company'); }}
          >
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
          <AccordionTrigger onClick={handleClick} className='absolute right-0 top-[80px] border border-[#0369a1] rounded-full translate-x-1/2 bg-white'></AccordionTrigger>
        </AccordionItem>
      </Accordion>
    );
  }
})

export default Sidebar