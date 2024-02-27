import { FC } from 'react';
import CompanyRegisterForm from '@/modules/auth/ui/CompanyRegisterForm.tsx';

const CreateCompanyPage: FC = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full min-h-screen h-full py-[50px] justify-center items-center">
        <CompanyRegisterForm/>
      </div>
    </div>
  );
};

export default CreateCompanyPage;