import { FC } from 'react';
import RegisterForm from '@/modules/auth/ui/RegisterForm.tsx';
import ConfirmCodeForm from '@/modules/auth/ui/ConfirmCodeForm.tsx';
import { useSelector } from '@/store';
import { authRegisterStepSelector } from '@/modules/auth/model/auth.slice.ts';

const RegisterPage: FC = () => {
  const step = useSelector(authRegisterStepSelector)
  
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full min-h-screen h-full py-[50px] justify-center items-center">
        {step === 0 && <RegisterForm/>}
        {step === 1 && <ConfirmCodeForm/>}
      </div>
    </div>
  );
};

export default RegisterPage;