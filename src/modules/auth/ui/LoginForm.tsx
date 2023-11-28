import { Button } from '@/shared/shadcnUI/button.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/shadcnUI/card.tsx';
import { Input } from '@/shared/shadcnUI/input.tsx';
import { Label } from '@/shared/shadcnUI/label.tsx';
import { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { authLoadingSelector, login } from '@/modules/auth/model/auth.slice.ts';
import BackdropLoading from '@/shared/ui/BackdropLoading.tsx';
import { useSelector } from '@/store';
import PasswordInput from '@/shared/ui/PasswordInput.tsx';

interface LoginValues {
  username: string
  password: string
}

const LoginValueSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username required'),
  password: Yup.string()
    .required('Password required')
})

const LoginForm: FC = () => {
  const dispatch = useDispatch()
  const loading = useSelector(authLoadingSelector)

  const formik = useFormik<LoginValues>({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: LoginValueSchema,
    onSubmit: values => {
      dispatch(login({
        username: values.username,
        password: values.password
      }))
    },
  })

  return (
    <>
      <Card className="w-full transition">
        <CardHeader>
          <CardTitle className="text-sky-900">Login</CardTitle>
          <CardDescription>
            Log in to our platform and keep growing!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username && (
              <div className="text-red-900 text-sm">{formik.errors.username}</div>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <PasswordInput
              id="password"
              handleChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && (
              <div className="text-red-900 text-sm">{formik.errors.password}</div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="button" onClick={() => {formik.handleSubmit()}}>Sign in</Button>
        </CardFooter>
      </Card>
      <BackdropLoading loading={loading}/>
    </>
  );
};

export default LoginForm;
