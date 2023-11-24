import { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/shadcnUI/tabs.tsx';
import LoginForm from '@/modules/auth/ui/LoginForm.tsx';
import RegisterForm from '@/modules/auth/ui/RegisterForm.tsx';

const AuthPage: FC = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center gap-10">
      <h1 className="text-sky-700 text-4xl font-bold">OneStep</h1>
      <Tabs className="w-[400px]">
        <TabsList className="grid w-full h-fit grid-cols-2">
          <TabsTrigger value="login" className="hover:bg-slate-200">Login</TabsTrigger>
          <TabsTrigger value="register" className="hover:bg-slate-200">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm/>
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthPage;