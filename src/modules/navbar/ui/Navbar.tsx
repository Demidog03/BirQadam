import { FC } from 'react';
import Menu from './Menu';
import { Flex } from 'antd';
import styled from 'styled-components';

const FlexStyle = styled(Flex)`
  position: sticky;
  top: 0;
  padding: 0 16px;
  z-index: 10;
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
