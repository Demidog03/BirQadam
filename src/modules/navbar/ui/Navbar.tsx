import { FC } from 'react';
import Menu from './Menu';
import { Flex } from 'antd';
import styled from 'styled-components';
import { COLORS } from '@/shared/lib/constants';

const FlexStyle = styled(Flex)`
  position: sticky;
  background: white;
  top: 0;
  padding: 16px 32px 10px;
  z-index: 10;
  box-shadow: ${COLORS.LIGHT[5]} 0px 1px 0px;
`
const H1Style = styled('h1')`
  font-size: 1.2rem;
  font-weight: 700;
`

const Navbar: FC = () => {
  return (
    <FlexStyle gap={2} justify='space-between' align='center'>
      <H1Style>OneStep</H1Style>
      <Menu />
    </FlexStyle>
  );
};

export default Navbar;
