import { ReactNode, memo, useEffect, useState } from 'react';
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
import { Flex, Layout, Menu, MenuProps, theme } from 'antd';
import styled from 'styled-components';

const { Sider } = Layout;

const SiderStyle = styled(Sider)`
  min-width: 80px;
`
const MenuStyleLogo = styled(Menu)`
  li.ant-menu-item {
    height: 60px;
    align-items: center;
    padding: 10px 10px 0 16px;
  }
  & li.ant-menu-item-selected {
    background: none;
  }
`
const MenuStyle = styled(Menu)`
  &-collapsed {
    & li.ant-menu-item {
      padding: 5px 16px 0 24px;
    }
  }
  & li.ant-menu-item {
    padding: 5px 16px 0 24px;
  }
`

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  path,
  icon?: React.ReactNode,
): MenuItem {
  return {
    key,
    icon,
    label,
    path,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Главная', '1', '/home', <BiSolidDashboard style={{ width:'24px', height: '24px' }}/>),
  getItem('Команды', '2', '/teams', <BiSolidBriefcase style={{ width:'24px', height: '24px' }}/>),
  getItem('Сотрудники', '3', '/employees', <BiSolidGroup style={{ width:'24px', height: '24px' }}/>),
  getItem('Курсы', '4', '/courses', <BiSolidGraduation style={{ width:'24px', height: '24px' }}/>)
]

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
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const pathnameSegments = usePathnameSegments();
  const [sidebarMenuItems, setSidebarMenuItems] = useState<TSidebarMenuItem[]>(initialSidebarMenuItems);
  const company = useSelector(companySelector);
  const user = useSelector(profileSelector);
  const sidebar = useSelector(sidebarSelector);
  const {
  token: { colorBgContainer },
} = theme.useToken();

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
    <SiderStyle style={{ background: colorBgContainer }} width='260px' collapsible collapsed={collapsed} onCollapse={(value) => {
      handleClick()
      setCollapsed(value)
    }}>
      
      <MenuStyleLogo onClick={() => { navigate('/company'); }} defaultSelectedKeys={['1']} mode="inline">
        <MenuStyleLogo.Item key='1' icon={<SidebarCompanyLogo imageSrc={company?.logo ? company.logo : ''}/>}>
          <Flex style={{ marginLeft: '12px' }} justify='center' vertical>
            <span style={{ height: '16px' }}>{company?.name}</span>
            <span style={{ }}>{user?.firstName + ' ' + user?.lastName}</span>
          </Flex>
        </MenuStyleLogo.Item>
      </MenuStyleLogo>

      <MenuStyle theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </SiderStyle>
  );
})

export default Sidebar

// <Accordion type="single" collapsible defaultValue="item-1" className='relative'>
// <AccordionItem value="item-1" className='bg-white flex flex-col min-w-[80px] max-w-[260px] pl-4 pr-4 pt-[20px] pb-[34px] gap-6 shadow-[3px_0px_40px_0px_rgba(87,156,216,0.10)] z-10 sticky h-screen top-0'>
// <div
//   className={cn('flex mb-8 cursor-pointer hover:bg-sky-600 hover:bg-opacity-5 py-2 px-3 rounded-[10px]', !sidebar.isOpen && 'px-0 py-0 hover:bg-transparent')}
//   onClick={() => { navigate('/company'); }}
// >
//   <SidebarCompanyLogo imageSrc={company?.logo ? company.logo : ''}/>
//   <AccordionContent className='ml-3'>
//     <h2 className='text-base font-medium'>{company?.name}</h2>
//     <h2 className='text-sm font-normal text-[#4f7596] whitespace-nowrap'>{user?.firstName + ' ' + user?.lastName}</h2>
//   </AccordionContent>
// </div>
// {sidebarMenuItems.map((item) => (
//   <SidebarMenuItem
//     key={item.routeName}
//     icon={item.icon}
//     isActive={item.isActive}
//     text={<AccordionContent className='w-[170px] flex justify-start'>{item.text}</AccordionContent>}
//     routeName={item.routeName}
//   />
// ))}
// <AccordionTrigger onClick={handleClick} className='absolute right-0 top-[80px] border border-[#0369a1] rounded-full translate-x-1/2 bg-white'></AccordionTrigger>
// </AccordionItem>
// </Accordion>