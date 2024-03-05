import { FC, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  authLoadingSelector,
  registerAction,
} from '@/modules/auth/model/auth.slice.ts';
import { useDispatch } from 'react-redux';
import BackdropLoading from '@/shared/ui/BackdropLoading.tsx';
import { useSelector } from '@/store';
import { Input } from '@/shared/shadcnUI/input.tsx';
import { Checkbox } from '@/shared/shadcnUI/checkbox.tsx';
import { Button } from '@/shared/shadcnUI/button.tsx';
import { useNavigate } from 'react-router-dom';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/shadcnUI/popover.tsx';
import { cn } from '@/shared/lib/utils.ts';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/shared/shadcnUI/calendar.tsx';

interface RegisterValues {
  firstName: string;
  lastName: string;
  post: string;
  email: string;
  dateOfBirth: Date | undefined;
  password: string;
  repeatPassword: string;
}

const RegisterValueSchema = Yup.object().shape({
  firstName: Yup.string().required('Требуется имя'),
  lastName: Yup.string().required('Требуется фамилия'),
  password: Yup.string()
    .min(8, 'Пароль должен содержать не менее 8 символов')
    .matches(/[0-9]/, 'Пароль должен содержать хотя бы 1 цифру')
    .matches(
      /[a-z]/,
      'Пароль должен содержать хотя бы 1 символ нижнего регистра'
    )
    .matches(
      /[A-Z]/,
      'Пароль должен содержать хотя бы 1 символ верхнего регистра'
    )
    .required('Требуется пароль'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
    .required('Повторите пароль'),
  email: Yup.string()
    .matches(
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Неверный адрес электронной почты'
    )
    .required('Требуется электронная почта'),
  post: Yup.string().required('Требуется должность'),
  dateOfBirth: Yup.string().required('Требуется дата рождения'),
});

const RegisterForm: FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(authLoadingSelector(registerAction.type));
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik<RegisterValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      post: '',
      email: '',
      dateOfBirth: undefined,
      password: '',
      repeatPassword: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: RegisterValueSchema,
    onSubmit: (values) => {
      console.log(values);
      termsAccepted &&
        values.dateOfBirth &&
        dispatch(
          registerAction({
            firstName: values.firstName,
            lastName: values.lastName,
            post: values.post,
            email: values.email,
            dateOfBirth: values.dateOfBirth.toISOString(),
            password: values.password,
            repeatPassword: values.repeatPassword,
          })
        );
    },
  });

  return (
    <>
      <div className='flex flex-col gap-5 items-center'>
        <h1 className='text-center text-3xl font-bold'>Регистрация представителя</h1>
        <h2 className='text-center max-w-[550px]'>
          Зарегистрируйтесь как представитель компании, чтобы получить доступ к инструментам платформы "OneStep"
        </h2>
        <div className='flex flex-col gap-3 max-w-[480px] w-full'>
          <Input
            id='firstName'
            onChange={formik.handleChange}
            value={formik.values.firstName}
            placeholder='Имя'
            className='bg-[#4F7596] bg-opacity-10 placeholder:text-[#4F7596] px-4 py-3 text-[16px] rounded-xl'
          />
          {formik.errors.firstName && (
            <div className='text-red-900 text-sm'>
              {formik.errors.firstName}
            </div>
          )}
          <Input
            id='lastName'
            onChange={formik.handleChange}
            value={formik.values.lastName}
            placeholder='Фамилия'
            className='bg-[#4F7596] bg-opacity-10 placeholder:text-[#4F7596] px-4 py-3 text-[16px] rounded-xl'
          />
          {formik.errors.lastName && (
            <div className='text-red-900 text-sm'>{formik.errors.lastName}</div>
          )}
          <Input
            id='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder='E-mail'
            className='bg-[#4F7596] bg-opacity-10 placeholder:text-[#4F7596] px-4 py-3 text-[16px] rounded-xl'
          />
          {formik.errors.email && (
            <div className='text-red-900 text-sm'>{formik.errors.email}</div>
          )}
          <Input
            id='post'
            onChange={formik.handleChange}
            value={formik.values.post}
            placeholder='Должность'
            className='bg-[#4F7596] bg-opacity-10 placeholder:text-[#4F7596] px-4 py-3 text-[16px] rounded-xl'
          />
          {formik.errors.post && (
            <div className='text-red-900 text-sm'>{formik.errors.post}</div>
          )}
          <Input
            id='password'
            type='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder='Пароль'
            className='bg-[#4F7596] bg-opacity-10 placeholder:text-[#4F7596] px-4 py-3 text-[16px] rounded-xl'
          />
          {formik.errors.password && (
            <div className='text-red-900 text-sm'>{formik.errors.password}</div>
          )}
          <Input
            id='repeatPassword'
            type='password'
            onChange={formik.handleChange}
            value={formik.values.repeatPassword}
            placeholder='Повторите пароль'
            className='bg-[#4F7596] bg-opacity-10 placeholder:text-[#4F7596] px-4 py-3 text-[16px] rounded-xl'
          />
          {formik.errors.repeatPassword && (
            <div className='text-red-900 text-sm'>
              {formik.errors.repeatPassword}
            </div>
          )}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-[280px] justify-start text-left font-normal',
                  !formik.values.dateOfBirth && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className='mr-2 h-4 w-4' />
                {formik.values.dateOfBirth ? (
                  format(formik.values.dateOfBirth, 'PPP')
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                id='dateOfBirth'
                mode='single'
                selected={formik.values.dateOfBirth}
                onSelect={async (selectedDate) => {
                  await formik.setFieldValue('dateOfBirth', selectedDate);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {formik.errors.dateOfBirth && (
            <div className='text-red-900 text-sm'>
              {formik.errors.dateOfBirth}
            </div>
          )}
        </div>
        <div className='flex gap-3 max-w-[650px]'>
          <Checkbox
            id='terms'
            className='mt-1 border-[#ADC4D6]'
            onCheckedChange={(checked) => {
              setTermsAccepted(typeof checked === 'boolean' ? checked : false);
            }}
          />
          <label htmlFor='terms' className='cursor-pointer'>
            Нажимая «Создать учетную запись», вы соглашаетесь с нашими Условиями
            обслуживания и Политикой конфиденциальности, а также подтверждаете,
            что прочитали нашу Политику использования данных.
          </label>
        </div>
        <div className='flex flex-col align-center max-w-[480px] w-full'>
          <Button
            disabled={!termsAccepted}
            onClick={() => {
              formik.handleSubmit();
            }}
            className='bg-[#1A8AE5] font-bold text-[14px] text-white w-full rounded-xl hover:bg-[#3e9cea]'
          >
            Создать учетную запись
          </Button>
          <Button
            variant='link'
            onClick={() => {
              navigate('/login');
            }}
          >
            Уже есть аккаунт
          </Button>
        </div>
      </div>
      <BackdropLoading loading={loading} />
    </>
  );
};

export default RegisterForm;
