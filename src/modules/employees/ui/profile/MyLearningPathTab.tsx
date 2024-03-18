import { FC } from 'react';
import { Card as AntCard, Button as AntButton } from 'antd';
import styled from 'styled-components';
import { COLORS, FONTS } from '@/shared/lib/constants.ts';

interface LearningPathItem {
  status: string;
  id: number;
  title: string;
  instructor: string;
  url: string;
}

interface MyLearningPathInterface {
  learningPathData: LearningPathItem[];
}

const Container = styled.div`
    width: 100%;
`;

const StyledCard = styled(AntCard)`
    width: 100%;
    border: none !important;
    box-shadow: none !important;
    display: flex;

    .ant-card-body {
        flex: 1;
        display: flex;
        padding:16px 0;
    }
    
`;

const Image = styled.img`
    min-width: 455.86px;
    max-width: 455.86px;
    min-height: 256.41px;
    max-height: 256.41px;
    border-radius: 20px;
    object-fit: cover;
`;

const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    align-items: flex-start;
    font-family: ${FONTS.MAINFONTFAMILY};
`;

const StatusText = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: ${COLORS.PRIMARY[4]};
    margin-bottom: 2px;
`;

const TitleText = styled.p`
    font-weight: bold;
    font-size: 18px;
    line-height: 22.5px;
    color: black;
    margin-bottom: 2px;
`;

const InstructorText = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: ${COLORS.PRIMARY[4]};
`;

const Button = styled(AntButton)`
    background-color: #1a8ae5;
    color: white;
    border-radius: 12px; 
    padding: 0 16px;
    margin: auto;
    &:hover {
        color: white;
    }
`;

const MyLearningPathTab: FC<MyLearningPathInterface> = ({ learningPathData }) => {
  return (
    <Container>
      <h1 style={{ paddingTop: '16px', fontWeight: 'bold', fontSize: '24px', lineHeight: '27.5px', letterSpacing: 'wide', color: 'black' }}>Your Learning Path</h1>
      {learningPathData.map(({ status, title, instructor, url, id }) => (
        <StyledCard key={id}>
          <Image src={url} alt={title} />
          <TextContainer>
            <StatusText>{status}</StatusText>
            <TitleText>{title}</TitleText>
            <InstructorText>{instructor}</InstructorText>
          </TextContainer>
          <Button>
            {status === 'In Progress' ? 'Continue' : 'View Certificate'}
          </Button>
        </StyledCard>
      ))}
    </Container>
  );
};

export default MyLearningPathTab;
