import { Button } from '@/shared/shadcnUI/button.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/shadcnUI/card.tsx';
import { Input } from '@/shared/shadcnUI/input.tsx';
import { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { authLoadingSelector, login } from '@/modules/auth/model/auth.slice.ts';
import BackdropLoading from '@/shared/ui/BackdropLoading.tsx';
import { useSelector } from '@/store';
import PasswordInput from '@/shared/ui/PasswordInput.tsx';
import { DatePicker } from '@/shared/ui/DatePicker';
import { CheckBox } from '@/shared/ui/CheckBox';



interface LoginValues {
  username: string
  password: string
  email: string
  job_title: string


}

const LoginValueSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Минимум 2 буквы')
    .required('Username required'),
  job_title: Yup.string()
    .min(2, 'Минимум 2 буквы')
    .required('job title required'),
  email: Yup.string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email'
    )
    .required('Email required'),
  password: Yup.string()
    .min(8, 'Password must have at least 8 characters')
    .matches(/[0-9]/, 'Password must have at least 1 digit')
    .matches(/[a-z]/, 'Password must have at least 1 lowercase character')
    .matches(/[A-Z]/, 'Password must have at least 1 uppercase character')
    .required('Password required'),
})

export const MyRegisterForm: FC = () => {
  const dispatch = useDispatch()
  const loading = useSelector(authLoadingSelector)

  const formik = useFormik<LoginValues>({
    initialValues: {
      username: '',
      password: '',
      email: '',
      job_title: '',
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
      <Card className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 '>
        <section className='w-full rounded-lg  md:mt-0 sm:max-w-lg xl:p-0 mx-auto'>
          <CardHeader>
            <CardTitle className="text-2xl text-center font-bold leading-tight tracking-tight text-gray-90">Создать команду</CardTitle>
            <CardDescription className=" text-center block mb-2 text-xs font-medium text-gray-900 cursor-pointer;">
              Создайте команду вашей компани,чтобы получить доступ к <br />
              инструментам создания курсов и отслеживать прогресс всей группы.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 pl-8 pr-8">
            <div className="space-y-1 ">

              <Input
                className=' hover:bg-accent '
                placeholder='ФИО'
                id="username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              {formik.errors.username && (
                <div className="text-red-900 text-sm">{formik.errors.username}</div>
              )}
            </div>
            <div className="space-y-1">

              <Input
                className=' hover:bg-accent '
                placeholder='Должность'
                id="job_title"
                onChange={formik.handleChange}
                value={formik.values.job_title}
              />
              {formik.errors.job_title && (
                <div className="text-red-900 text-sm">{formik.errors.job_title}</div>
              )}
            </div>
            <div className="space-y-1">

              <Input
                className=' hover:bg-accent '
                placeholder='Email'
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && (
                <div className="text-red-900 text-sm">{formik.errors.email}</div>
              )}
            </div>
            <div className="space-y-1">
              <PasswordInput
                className=' hover:bg-accent '
                placeholder="Пароль"
                id="password"
                handleChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password && (
                <div className="text-red-900 text-sm">{formik.errors.password}</div>
              )}
            </div>
            <div className="space-y-1">
              <DatePicker />
            </div>

          </CardContent>
          <CheckBox />

          <CardFooter>

            <Button type="button" className='text-white w-full h-7 outline-none focus:ring-4 font-medium rounded-lg text-xs px-5 py-2.5 text-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-700 focus:ring-blue-300 disabled:bg-blue-500;' onClick={() => { formik.handleSubmit() }}>
              Создать учетную запись
            </Button>
          </CardFooter>
        </section>
      </Card>
      <BackdropLoading loading={loading} />
    </>
  );
};

