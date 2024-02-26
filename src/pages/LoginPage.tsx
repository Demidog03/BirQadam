import { FC } from 'react';
import SigninForm from '@/modules/auth/ui/SigninForm.tsx';

const LoginPage: FC = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full min-h-screen h-full py-[50px] justify-center items-center">
        <SigninForm />
      </div>
    </div>
  );
};

export default LoginPage;
