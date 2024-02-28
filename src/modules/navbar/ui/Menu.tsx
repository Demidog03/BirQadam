import { Button } from '@/shared/shadcnUI/button';
import { FC } from 'react';
import HelpIcon from './HelpIcon';

const Menu: FC = () => {
  return (
    <div className=" items-center gap-2.5 hidden lg:flex">
      <Button variant="link" type="button">
        Courses
      </Button>
      <Button variant="link" type="button">
        Paths
      </Button>
      <Button variant="link" type="button">
        Practice
      </Button>
      <Button variant="link" type="button">
        Resources
      </Button>
      <Button variant="link" type="button">
        Events
      </Button>
      <HelpIcon />
      <Button variant="link" type="button" className="font-bold">
        Log out
      </Button>
    </div>
  );
};

export default Menu;
