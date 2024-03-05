import Sidebar from '@/modules/sidebar/ui/Sidebar.tsx';
import { FC, ReactNode } from 'react';
import { useSelector } from '@/store';
import { sidebarSelector } from '@/modules/sidebar/model/sidebar.slice.ts';
import Navbar from '@/modules/navbar/ui/Navbar.tsx';
import ContainerLayout from '@/shared/lib/layouts/ContainerLayout.tsx';

const MainLayout: FC<{children: ReactNode}> = ({ children }) => {
  const sidebar = useSelector(sidebarSelector)
  
  return (
    <div className="flex w-full pr-[0.5rem] bg-[#fafafa]">
      <Sidebar/>
      <div style={{ width: `calc(100% - ${sidebar?.isOpen ? 260 : 80}px)`, transition: 'ease-out 0.2s' }} >
        <Navbar/>
        <ContainerLayout>
          {children}
        </ContainerLayout>
      </div>
    </div>
  );
};

export default MainLayout;
