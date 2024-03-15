import Sidebar from '@/modules/sidebar/ui/Sidebar.tsx';
import { FC, ReactNode } from 'react';
import { useSelector } from '@/store';
import { sidebarSelector } from '@/modules/sidebar/model/sidebar.slice.ts';
import Navbar from '@/modules/navbar/ui/Navbar.tsx';
import ContainerLayout from '@/shared/lib/layouts/ContainerLayout.tsx';
import { Layout } from 'antd';

const MainLayout: FC<{children: ReactNode}> = ({ children }) => {
  const sidebar = useSelector(sidebarSelector)
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar/>
      <div style={{ width: `calc(100% - ${sidebar.isOpen ? 260 : 80}px)`, transition: 'ease-out 0.2s' }} >
        <Navbar/>
        <ContainerLayout>
          {children}
        </ContainerLayout>
      </div>
    </Layout>
  );
};

export default MainLayout;
