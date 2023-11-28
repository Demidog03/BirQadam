import { Button } from '@/shared/shadcnUI/button.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/shadcnUI/card.tsx';
import { Input } from '@/shared/shadcnUI/input.tsx';
import { Label } from '@/shared/shadcnUI/label.tsx';
import { FC } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { authErrorsSelector, authLoadingSelector, register } from '@/modules/auth/model/auth.slice.ts';
import { useDispatch } from 'react-redux';
import BackdropLoading from '@/shared/ui/BackdropLoading.tsx';
import { useSelector } from '@/store';
import PasswordInput from '@/shared/ui/PasswordInput.tsx';
import { useUpdateEffect } from 'usehooks-ts';

interface RegisterValues {
  username: string
  password: string
  repeatPassword: string
  email: string
  firstName: string
  lastName: string
}

const RegisterValueSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, 'Minimum username length is 4')
    .max(30, 'Maximum username length is 30')
    .required('Username required'),
  password: Yup.string()
    .min(8, 'Password must have at least 8 characters')
    .matches(/[0-9]/, 'Password must have at least 1 digit')
    .matches(/[a-z]/, 'Password must have at least 1 lowercase character')
    .matches(/[A-Z]/, 'Password must have at least 1 uppercase character')
    .required('Password required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  email: Yup.string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email'
    )
    .required('Email required'),
  firstName: Yup.string(),
  lastName: Yup.string(),
})

const RegisterForm: FC<{setTab: (tab: 'login' | 'register') => void}> = ({ setTab }) => {
  const dispatch = useDispatch()
  const loading = useSelector(authLoadingSelector)
  const errors = useSelector(authErrorsSelector)

  const formik = useFormik<RegisterValues>({
    initialValues: {
      username: '',
      password: '',
      repeatPassword: '',
      email: '',
      firstName: '',
      lastName: ''
    },
    validationSchema: RegisterValueSchema,
    onSubmit: values => {
      console.log(values)
      dispatch(register({
        username: values.username,
        password: values.password,
        repeatPassword: values.repeatPassword,
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName
      }))
    },
  })

  useUpdateEffect(() => {
    console.log(errors)
    if(!errors.find(error => error.actionType === register.type)) {
      setTab('login')
    }
  }, [errors, setTab]);
  
  return (
    <>
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
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && (
              <div className="text-red-900 text-sm">{formik.errors.email}</div>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
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
          <div className="space-y-1">
            <Label htmlFor="repeatPassword">Repeat password</Label>
            <PasswordInput
              id="repeatPassword"
              handleChange={formik.handleChange}
              value={formik.values.repeatPassword}
            />
            {formik.errors.repeatPassword && (
              <div className="text-red-900 text-sm">{formik.errors.repeatPassword}</div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="button" onClick={() => {formik.handleSubmit()}}>Sign up</Button>
        </CardFooter>
      </Card>
      <BackdropLoading loading={loading}/>
    </>
  );
};

export default RegisterForm;
