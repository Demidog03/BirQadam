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
import { authLoadingSelector, login } from '@/modules/auth/model/auth.slice.ts';
import BackdropLoading from '@/shared/ui/BackdropLoading.tsx';
import { useSelector } from '@/store';

interface SigninValues {
  username: string;
  password: string;
}

const SigninValueSchema = Yup.object().shape({
  username: Yup.string().required('Username required'),
  password: Yup.string().required('Password required'),
});

const SigninForm: FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(authLoadingSelector);

  const formik = useFormik<SigninValues>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: SigninValueSchema,
    onSubmit: (values) => {
      dispatch(
        login({
          username: values.username,
          password: values.password,
        })
      );
    },
  });

  return (
    <>
      <Card className="max-w-[480px] m-auto transition">
        <CardHeader className="flex justify-center items-center">
          <CardTitle className="text-[#0d141c] text-3xl font-bold md:text-4xl">
            Log in to OneStep
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="username">Email or username</Label>
            <Input
              className="placeholder:text-[#4f7596] border-[#d1dbe8]"
              id="username"
              placeholder="Enter email or username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username && (
              <div className="text-red-900 text-sm">
                {formik.errors.username}
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
        <CardFooter>
          <Button
            className="bg-[#1a8ae5] w-full rounded-[12px]"
            type="button"
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Sign in
          </Button>
        </CardFooter>
      </Card>
      <BackdropLoading loading={loading} />
    </>
  );
};

export default SigninForm;
