import { FC } from 'react';
import CourseDashboard from '@/modules/courses/ui/dashboard/CourseDashboard.tsx';
import ContentWithTitleLayout from '@/shared/lib/layouts/ContentWithTitleLayout.tsx';
import ContainerLayout from '@/shared/lib/layouts/ContainerLayout.tsx';
import Header from '@/modules/header/ui/Header.tsx';

const Home: FC = () => {
  return (
    <div className="w-full bg-[#EFF3F9]">
      <Header/>
      <ContainerLayout>
        <ContentWithTitleLayout title='Dashboard'>
          <CourseDashboard/>
        </ContentWithTitleLayout>
      </ContainerLayout>
    </div>
  );
};

export default Home;