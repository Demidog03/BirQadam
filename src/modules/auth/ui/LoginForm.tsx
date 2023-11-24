import { Button } from '@/shared/shadcnUI/button.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/shadcnUI/card.tsx';
import { Input } from '@/shared/shadcnUI/input.tsx';
import { Label } from '@/shared/shadcnUI/label.tsx';
import { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'

interface LoginValues {
  username: string
  password: string
}

const LoginValueSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, 'Minimum username length is 4')
    .max(30, 'Maximum username length is 30')
    .required('Username required'),
  password: Yup.string()
    .min(8, 'Password must have at least 8 characters')
    .matches(/[0-9]/, 'Password must have at least 1 digit')
    .matches(/[a-z]/, 'Password must have at least 1 lowercase character')
    .matches(/[A-Z]/, 'Password must have at least 1 uppercase character')
    .required('Password required')
})

const LoginForm: FC = () => {
  const formik = useFormik<LoginValues>({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: LoginValueSchema,
    onSubmit: values => {
      console.log(values)
    },
  })

  return (
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
          <Input
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && (
            <div className="text-red-900 text-sm">{formik.errors.password}</div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit" onClick={formik.handleSubmit}>Sign in</Button>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
