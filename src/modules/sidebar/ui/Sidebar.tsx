import { Key, ReactNode, memo, useState } from 'react';
import usePathnameSegments from '@/shared/lib/hooks/usePathnameSegments.tsx';
import { useDispatch } from 'react-redux';
import { setSidebarOpenState, sidebarSelector } from '@/modules/sidebar/model/sidebar.slice.ts';
import SidebarCompanyLogo from './SidebarCompanyLogo';
import { useSelector } from '@/store';
import { companySelector } from '@/modules/company/model/company.slice';
import { profileSelector } from '@/modules/profile/model/profile.slice';
import { BiSolidBriefcase, BiSolidDashboard, BiSolidGraduation, BiSolidGroup } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { Flex, Layout, Menu, MenuProps } from 'antd';
import styled from 'styled-components';
import { COLORS } from '@/shared/lib/constants';

const { Sider } = Layout;

const SiderStyle = styled(Sider)`
  background: ${COLORS.LIGHT[0]} !important;
  & .ant-layout-sider-trigger {
    background: ${COLORS.LIGHT[0]};
    & span {
      padding: 5px;
      border: 1px solid ${COLORS.PRIMARY[9]};
      border-radius: 100%;
      color: ${COLORS.PRIMARY[9]};
    }
  }
`

const MenuStyle = styled(Menu)`
  & li.ant-menu-item:first-child {
    height: 60px;
    padding: 8px 16px;
    margin-bottom: 20px;
    &.ant-menu-item-selected {
      background: none;
    }
    & span.ant-menu-title-content {
      margin-left: 12px;
      & div {
        padding-bottom: 15px;
      }
      & span {
        font-weight: 400;
        margin: 0;
        height: 25px;
        &:first-child {
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
  }
  & li.ant-menu-item {
    padding: 6px 24px;
    & svg {
      width: 24px;
      height: 24px;
    }
  }
`

type TSidebarMenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: ReactNode,
  key: Key,
  icon?: ReactNode,
): TSidebarMenuItem {
  return {
    key,
    icon,
    label,
  } as TSidebarMenuItem;
}

const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const pathnameSegments = usePathnameSegments();
  const company = useSelector(companySelector);
  const user = useSelector(profileSelector);
  const sidebar = useSelector(sidebarSelector);

  const initialSidebarMenuItems: TSidebarMenuItem[] = [
    getItem(
      <Flex vertical>
        <span>{company?.name}</span>
        <span>{user?.firstName + ' ' + user?.lastName}</span>
      </Flex>, 
      'company',
      <SidebarCompanyLogo imageSrc={company?.logo ? company.logo : ''}/>
    ),
    getItem('Главная', 'home', <BiSolidDashboard/>),
    getItem('Команды', 'teams', <BiSolidBriefcase/>),
    getItem('Сотрудники', 'employees', <BiSolidGroup/>),
    getItem('Курсы', 'courses', <BiSolidGraduation/>)
  ]

  const handleClick = () => {
    dispatch(setSidebarOpenState(!sidebar.isOpen))
  }

  return (
    <SiderStyle width='260px' collapsible collapsed={collapsed} onCollapse={(value) => {
      handleClick()
      setCollapsed(value)
    }}>
      <MenuStyle onClick={(e) => { navigate('/' + e.key) }} selectedKeys={[pathnameSegments[0]]} mode="inline" items={initialSidebarMenuItems} />
    </SiderStyle>
  );
})

export default Sidebar
