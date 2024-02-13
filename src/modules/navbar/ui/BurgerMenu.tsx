import { FC } from 'react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuContent,
} from '@/shared/shadcnUI/dropdown';
import { FiMenu } from 'react-icons/fi';
import { Button } from '@/shared/shadcnUI/button';
import HelpIcon from './HelpIcon';

const BurgerMenu: FC = () => {
  return (
    <div className="flex justify-end items-center lg:hidden">
      <HelpIcon />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="cursor-pointer">
            <FiMenu />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="-translate-x-1/2 -mr-24">
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex gap-1 cursor-pointer">
              <Button variant="link" type="button" className="px-0">
                Courses
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-1 cursor-pointer">
              <Button variant="link" type="button" className="px-0">
                Paths
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-1 cursor-pointer">
              <Button variant="link" type="button" className="px-0">
                Practice
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-1 cursor-pointer">
              <Button variant="link" type="button" className="px-0">
                Resources
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-1 cursor-pointer">
              <Button variant="link" type="button" className="px-0">
                Events
              </Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex gap-1 cursor-pointer">
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default BurgerMenu;
