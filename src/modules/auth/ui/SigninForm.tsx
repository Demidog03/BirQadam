import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { authLoadingSelector, loginAction } from '@/modules/auth/model/auth.slice.ts';
import { useSelector } from '@/store';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Form, Input, Typography } from 'antd';
import styled from 'styled-components';
import { BsEnvelopeAtFill } from 'react-icons/bs';
import { COLORS } from '@/shared/lib/constants.ts';
import { BiSolidLock } from 'react-icons/bi';

interface LoginSchema {
  email: string;
  password: string;
}

const FormStyle = styled(Form)`
  max-width: 700px;
  width: 100%;
  background-color: #F7FAFC;
  padding: 40px;
  border-radius: 12px;
`
const FormItemStyle = styled(Form.Item<LoginSchema>)`
  width: 100%;
`
const TitleStyle = styled(Typography)`
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: ${COLORS.PRIMARY[6]};
  line-height: 110%;
`
const SubTitleStyle = styled(Typography)`
  font-size: 1.3rem;
  font-weight: 300;
  margin-bottom: 30px;
`
const ButtonStyle = styled(Button)`
  & span {
    font-weight: 500;
  };
  margin-bottom: 5px;
`

const SigninForm: FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(authLoadingSelector(loginAction.type));
  const navigate = useNavigate()

  const onFinish = (values: LoginSchema) => {
    dispatch(loginAction({
      ...values
    }))
  };
  
  return (
    <>
      <FormStyle
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Flex gap={2} align="center" justify="center" vertical>
          <TitleStyle>OneStep</TitleStyle>
          <SubTitleStyle>Вход в систему</SubTitleStyle>
          <FormItemStyle
            name="email"
            rules={[{ required: true, message: 'Введите вашу электронную почту' }]}
          >
            <Input size="large" placeholder="Email" prefix={<BsEnvelopeAtFill style={{ color: COLORS.PRIMARY[3] }}/>}/>
          </FormItemStyle>

          <FormItemStyle
            name="password"
            rules={[{ required: true, message: 'Введите пароль' }]}
          >
            <Input.Password size="large" placeholder="Пароль" prefix={<BiSolidLock style={{ color: COLORS.PRIMARY[3] }}/>}/>
          </FormItemStyle>

          <ButtonStyle type="primary" htmlType="submit" loading={loading}>
                Войти
          </ButtonStyle>
          <Button type="link" onClick={() => { navigate('/register'); }}>Регистрировать компанию</Button>
        </Flex>
      </FormStyle>
    </>
  );
};

export default SigninForm;
