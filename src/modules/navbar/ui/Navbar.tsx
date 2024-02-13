import { Button } from '@/shared/shadcnUI/button';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <div className="w-full bg-white px-[50px] py-4 flex justify-between items-center">
      <h1 className="text-lg text-[#0d141c] font-bold">OneStep</h1>
      <div className="flex items-center gap-2.5">
        <Button variant="blue" type="button">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
