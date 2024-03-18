import { FC } from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import { COLORS, FONTS } from '@/shared/lib/constants.ts';

interface ProfileEditInterface {
  completedCoursesCount: number
  averageScore: number
}

const Container = styled.div`
  display: flex;
  padding-bottom: 0;
  gap: 16px;
`;

const StyledCard = styled(Card)`
  width: 50%;
  flex: 1;
  border: 1px solid #e0e0e0;
  border-radius: 14px;
`;

const Title = styled.div`
  font-family: ${FONTS.MAINFONTFAMILY};
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: ${COLORS.SECONDARY[9]};
`;

const Value = styled.div`
  font-family: ${FONTS.MAINFONTFAMILY};
  margin-top: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: ${COLORS.SECONDARY[9]};
`;

const EmployeeProgress: FC<ProfileEditInterface> = ({ completedCoursesCount, averageScore }) => {
  return (
    <Container>
      <StyledCard>
        <Title>Courses Completed</Title>
        <Value>{completedCoursesCount}</Value>
      </StyledCard>
      <StyledCard>
        <Title>Average Score</Title>
        <Value>{averageScore} %</Value>
      </StyledCard>
    </Container>
  )
}

export default EmployeeProgress;
