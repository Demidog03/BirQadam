import { FC } from 'react';
import { useSelector } from '@/store';
import { profileSelector } from '@/modules/profile/model/profile.slice.ts';
import { BiLogOutCircle, BiSolidUserCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { logoutAction } from '@/modules/auth/model/auth.slice.ts';
import { useNavigate } from 'react-router-dom';
import { Avatar, Dropdown, Flex, MenuProps } from 'antd';
import styled from 'styled-components';
import { COLORS } from '@/shared/lib/constants';

const AvatarStyle = styled(Avatar)`
  background: ${COLORS.SECONDARY[7]};
`

const ProfileMenu: FC = () => {
  const profile = useSelector(profileSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logoutAction())
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      type: 'group',
      label: <span style={{ color: COLORS.PRIMARY[9], fontSize: '18px' }}>{profile?.firstName}</span>,
      children: [
        {
          key: '1-1',
          label: (
            <Flex gap={8} align='center' onClick={() => { navigate('/profile'); }}>
              <BiSolidUserCircle style={{ fontSize: '18px' }}/>
              <span>Profile</span>
            </Flex>
          )
        },
        {
          key: '1-2',
          label: (
            <Flex gap={8} align='center' onClick={handleLogout}>
              <BiLogOutCircle style={{ fontSize: '18px' }}/>
              <span>Log out</span>
            </Flex>
          )
        },
      ],
    },
  ];
  
  return (
    <Dropdown menu={{ items }} overlayStyle={{ width: '150px' }} placement="bottomRight">
      <AvatarStyle size={40} gap={2} src="some_link">{(profile?.firstName || 'FirstName')[0] + (profile?.lastName || 'LastName')[0]}</AvatarStyle>
    </Dropdown>
  );
};

export default ProfileMenu;