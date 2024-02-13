import { FC } from 'react';
import BurgerMenu from './BurgerMenu';
import Menu from './Menu';

const Navbar: FC = () => {
  return (
    <div className="w-full bg-white px-[50px] py-4 flex justify-between items-center">
      <h1 className="text-lg text-[#0d141c] font-bold">OneStep</h1>
      <Menu />
      <BurgerMenu />
    </div>
  );
};

export default Navbar;
