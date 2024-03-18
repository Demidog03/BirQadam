import { FC } from 'react';
import { RiQuestionLine } from 'react-icons/ri';
import styled from 'styled-components';

const DivStyle = styled('div')`
  cursor: pointer;
  margin: 0 8px;
`
const IcinStile = styled(RiQuestionLine)`
  width: 20px;
  height: 20px;
`

const HelpIcon: FC = () => {
  return (
    <DivStyle>
      <IcinStile/>
    </DivStyle>
  );
};

export default HelpIcon;
