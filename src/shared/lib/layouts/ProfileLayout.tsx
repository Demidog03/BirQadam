import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

const StyledProfileLayout = styled(Layout)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled(Content)`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProfileLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledProfileLayout>
      <ContentContainer>
        {children}
      </ContentContainer>
    </StyledProfileLayout>
  );
};

export default ProfileLayout;