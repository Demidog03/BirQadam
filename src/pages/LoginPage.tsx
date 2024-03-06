import { FC } from 'react';
import SigninForm from '@/modules/auth/ui/SigninForm.tsx';
import { Flex } from 'antd';
import styled from 'styled-components';

const WrapperStyle = styled(Flex)`
  height: 100dvh;
`

const LoginPage: FC = () => {
  return (
    <WrapperStyle align="center" justify="center">
      <SigninForm />
    </WrapperStyle>
  );
};

export default LoginPage;
