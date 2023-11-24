import { Button } from '@/shared/shadcnUI/button.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/shadcnUI/card.tsx';
import { Input } from '@/shared/shadcnUI/input.tsx';
import { Label } from '@/shared/shadcnUI/label.tsx';
import { FC } from 'react';

const RegisterForm: FC = () => {
  return (
    <Card className="w-full transition">
      <CardHeader>
        <CardTitle className="text-sky-900">Register</CardTitle>
        <CardDescription>
          There is only one step to change your life!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" defaultValue="" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" defaultValue="" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" defaultValue="" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input id="password" defaultValue="" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="passwordRepeat">Repeat password</Label>
          <Input id="passwordRepeat" defaultValue="" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Sign up</Button>
      </CardFooter>
    </Card>
  );
};

export default RegisterForm;
