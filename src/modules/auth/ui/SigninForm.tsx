import { Button } from '@/shared/shadcnUI/button.tsx';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/shadcnUI/card.tsx';
import { Input } from '@/shared/shadcnUI/input.tsx';
import { Label } from '@/shared/shadcnUI/label.tsx';
import { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { authLoadingSelector, loginAction } from '@/modules/auth/model/auth.slice.ts';
import BackdropLoading from '@/shared/ui/BackdropLoading.tsx';
import { useSelector } from '@/store';
import { useNavigate } from 'react-router-dom';

interface SigninValues {
  email: string;
  password: string;
}

const SigninValueSchema = Yup.object().shape({
  email: Yup.string().required('Username required'),
  password: Yup.string().required('Password required'),
});

const SigninForm: FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(authLoadingSelector(loginAction.type));
  const navigate = useNavigate()

  const formik = useFormik<SigninValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SigninValueSchema,
    onSubmit: (values) => {
      console.log('fsfs')
      dispatch(
        loginAction({
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  return (
    <>
      <Card className="max-w-[480px] w-full m-auto transition">
        <CardHeader className="flex justify-center items-center">
          <CardTitle className="text-[#0d141c] text-3xl font-bold md:text-4xl">
            Log in to OneStep
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Email or username</Label>
            <Input
              className="placeholder:text-[#4f7596] border-[#d1dbe8]"
              id="email"
              placeholder="Enter email or username"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && (
              <div className="text-red-900 text-sm">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              className="placeholder:text-[#4f7596] border-[#d1dbe8]"
              id="password"
              type="password"
              placeholder="Enter password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && (
              <div className="text-red-900 text-sm">
                {formik.errors.password}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button
            className="bg-[#1a8ae5] w-full rounded-[12px]"
            type="button"
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Войти
          </Button>
          <Button variant="link" onClick={() => { navigate('/register'); }}>Создать команду</Button>
        </CardFooter>
      </Card>
      <BackdropLoading loading={loading} />
    </>
  );
};

export default SigninForm;
