import { Sidebar } from '@/widgets/sidebar';
import { FC, ReactNode } from 'react';

const MainLayout: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar/>
      {children}
    </div>
  );
};

export default MainLayout;
