import { FC } from 'react';
import styled from 'styled-components';
import EmployeeEditBlock from '@/modules/employees/ui/profile/EmployeeEditBlock.tsx';
import EmployeeProgress from '@/modules/employees/ui/profile/EmployeeProgress.tsx';
import EmployeeProfileTabs from '@/modules/employees/ui/profile/EmployeeProfileTabs.tsx';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
    background: white;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProfilePage: FC = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <EmployeeEditBlock/>
        <EmployeeProgress averageScore={87} completedCoursesCount={12} />
        <EmployeeProfileTabs />
      </ContentContainer>
    </PageContainer>
  );
};

export default ProfilePage;
