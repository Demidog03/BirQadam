import Sidebar from '@/modules/sidebar/ui/Sidebar.tsx';
import { FC, ReactNode } from 'react';
import { useSelector } from '@/store';
import { sidebarSelector } from '@/modules/sidebar/model/sidebar.slice.ts';
import Navbar from '@/modules/navbar/ui/Navbar.tsx';

const MainLayout: FC<{children: ReactNode}> = ({ children }) => {
  const sidebar = useSelector(sidebarSelector)
  
  return (
    <div className="flex w-full min-h-screen h-full pr-[0.5rem]">
      <Sidebar/>
      <div style={{ width: `calc(100% - ${sidebar?.width || 0}px)`, transition: 'ease-out 0.2s' }} >
        <Navbar/>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
