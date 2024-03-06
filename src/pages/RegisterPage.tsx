import { FC } from 'react';
import RegisterForm from '@/modules/auth/ui/RegisterForm.tsx';
import ConfirmCodeForm from '@/modules/auth/ui/ConfirmCodeForm.tsx';
import { useSelector } from '@/store';
import { authRegisterStepSelector } from '@/modules/auth/model/auth.slice.ts';
import styled from 'styled-components';
import { Flex } from 'antd';

const WrapperStyle = styled(Flex)`
  height: 100dvh;
`

const RegisterPage: FC = () => {
  const step = useSelector(authRegisterStepSelector)
  
  return (
    <WrapperStyle align="center" justify="center">
      {step === 0 && <RegisterForm/>}
      {step === 1 && <ConfirmCodeForm/>}
    </WrapperStyle>
  );
};

export default RegisterPage;