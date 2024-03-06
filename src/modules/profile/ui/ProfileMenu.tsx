import {
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuContent
} from '@/shared/shadcnUI/dropdown.tsx';
import { DropdownMenu } from '@/shared/shadcnUI/dropdown.tsx';
import { FC } from 'react';
import Avatar from '@/modules/profile/ui/Avatar.tsx';
import { useSelector } from '@/store';
import { profileSelector } from '@/modules/profile/model/profile.slice.ts';
import { BiLogOutCircle, BiSolidUserCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { logoutAction } from '@/modules/auth/model/auth.slice.ts';
import { useNavigate } from 'react-router-dom';

const ProfileMenu: FC = () => {
  const profile = useSelector(profileSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleLogout = () => {
    dispatch(logoutAction())
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:border-0 focus:outline-0">
          <Avatar imageSrc="some_link" firstName={profile?.firstName || 'FirstName'} lastName={profile?.lastName || 'LastName'}/>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{profile?.firstName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex gap-1" onClick={() => { navigate('/profile'); }}>
            <BiSolidUserCircle className="text-lg"/>
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-1" onClick={handleLogout}>
            <BiLogOutCircle className="text-lg"/>
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;