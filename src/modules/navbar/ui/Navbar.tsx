import { FC } from 'react';
import BurgerMenu from './BurgerMenu';
import Menu from './Menu';
import { useSelector } from '@/store';
import { sidebarSelector } from '@/modules/sidebar/model/sidebar.slice';

const Navbar: FC = () => {
  const sidebar = useSelector(sidebarSelector)

  return (
    <div className="w-full bg-white px-[50px] py-4 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-lg text-[#0d141c] font-bold">{sidebar?.width ? '' : 'OneStep'}</h1>
      <Menu />
      <BurgerMenu />
    </div>
  );
};

export default Navbar;
