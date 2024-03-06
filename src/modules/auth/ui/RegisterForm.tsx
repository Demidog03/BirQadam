import { FC, useState } from 'react';
import * as Yup from 'yup';
import {
  authLoadingSelector,
  registerAction,
} from '@/modules/auth/model/auth.slice.ts';
import { useDispatch } from 'react-redux';
import { useSelector } from '@/store';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, DatePicker, Flex, Form, Input, Typography } from 'antd';
import { COLORS } from '@/shared/lib/constants.ts';
import { BsEnvelopeAtFill } from 'react-icons/bs';
import { BiSolidBriefcase, BiSolidLock, BiSolidUserDetail } from 'react-icons/bi';
import dayjs from 'dayjs'

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

const FormStyle = styled(Form)`
  max-width: 700px;
  width: 100%;
  background-color: #F7FAFC;
  padding: 40px;
  border-radius: 12px;
`
const FormItemStyle = styled(Form.Item<RegisterValues>)`
  width: 100%;
`
const TitleStyle = styled(Typography)`
  font-size: 2rem;
  font-weight: 600;
  color: ${COLORS.PRIMARY[7]};
  line-height: 110%;
  margin-bottom: 10px;
`
const SubTitleStyle = styled(Typography)`
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 30px;
  line-height: 110%;
  text-align: center;
`

const RegisterForm: FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(authLoadingSelector(registerAction.type));
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: RegisterValues) => {
    const formattedDateOfBirth = dayjs(values.dateOfBirth).toISOString()
    const formattedValues = {
      ...values,
      dateOfBirth: formattedDateOfBirth
    };
    dispatch(registerAction({
      ...formattedValues
    }))
  };
  const ButtonStyle = styled(Button)`
  & span {
    font-weight: 500;
  };
  margin-bottom: 5px;
`

  return (
    <>
      <FormStyle
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{
          dateOfBirth: dayjs('2019-01-25')
        }}
      >
        <Flex gap={2} align="center" justify="center" vertical>
          <TitleStyle>Регистрация представителя</TitleStyle>
          <SubTitleStyle>
              Зарегистрируйтесь как представитель компании, чтобы получить доступ к инструментам платформы "OneStep"
          </SubTitleStyle>
          <FormItemStyle
            name="firstName"
            rules={[{ required: true, message: 'Требуется имя' }]}
          >
            <Input size="large" placeholder="Имя" prefix={<BiSolidUserDetail style={{ color: COLORS.PRIMARY[3] }}/>}/>
          </FormItemStyle>

          <FormItemStyle
            name="lastName"
            rules={[{ required: true, message: 'Требуется фамилия' }]}
          >
            <Input size="large" placeholder="Фамилия" prefix={<BiSolidUserDetail style={{ color: COLORS.PRIMARY[3] }}/>}/>
          </FormItemStyle>

          <FormItemStyle
            name="post"
            rules={[{ required: true, message: 'Напишите вашу должность' }]}
          >
            <Input size="large" placeholder="Должность" prefix={<BiSolidBriefcase style={{ color: COLORS.PRIMARY[3] }}/>}/>
          </FormItemStyle>

          <FormItemStyle
            name="email"
            rules={[{ required: true, message: 'Введите электронную почту' }]}
          >
            <Input size="large" placeholder="Email" prefix={<BsEnvelopeAtFill style={{ color: COLORS.PRIMARY[3] }}/>}/>
          </FormItemStyle>

          <FormItemStyle
            name="password"
            rules={[{ required: true, message: 'Введите пароль' }]}
          >
            <Input.Password size="large" placeholder="Пароль" prefix={<BiSolidLock style={{ color: COLORS.PRIMARY[3] }}/>}/>
          </FormItemStyle>

          <FormItemStyle
            name="repeatPassword"
            rules={[{ required: true, message: 'Введите пароль повторно' }]}
          >
            <Input.Password size="large" placeholder="Повторите пароль" prefix={<BiSolidLock style={{ color: COLORS.PRIMARY[3] }}/>}/>
          </FormItemStyle>

          <FormItemStyle
            name="dateOfBirth"
            rules={[{ required: true, message: 'Введите дату рождения' }]}
          >
            <DatePicker
              size="large"
              placeholder="Дата рождения"
              style={{ width: '100%' }}
            />
          </FormItemStyle>

          <ButtonStyle type="primary" htmlType="submit" loading={loading}>
            Подтвердить
          </ButtonStyle>
          <Button type="link" onClick={() => { navigate('/login'); }}>Войти в систему</Button>
        </Flex>
      </FormStyle>
    </>
  );
};

export default RegisterForm;
