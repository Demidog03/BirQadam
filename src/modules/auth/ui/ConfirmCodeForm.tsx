import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '@/store';
import {
  authLoadingSelector,
  authTempUserIdSelector,
  sendCodeAction
} from '@/modules/auth/model/auth.slice.ts';
import { Button, Flex, Form, Typography } from 'antd';
import { COLORS } from '@/shared/lib/constants.ts';

import styled from 'styled-components';
import { MaskedInput } from 'antd-mask-input';

interface ConfirmCodeValues {
  code: string
}

const FormStyle = styled(Form)`
  max-width: 700px;
  width: 100%;
  padding: 40px;
  border-radius: 12px;
`
const FormItemStyle = styled(Form.Item<ConfirmCodeValues>)`
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
const ButtonStyle = styled(Button)`
  & span {
    font-weight: 500;
  };
  margin-bottom: 5px;
`

const ConfirmCodeForm: FC = () => {
  const dispatch = useDispatch()
  const userId = useSelector(authTempUserIdSelector)
  const loading = useSelector(authLoadingSelector(sendCodeAction.type))
  
  const onFinish = (values: ConfirmCodeValues) => {
    if(userId && values.code) {
      dispatch(sendCodeAction({
        code: values.code,
        userId
      }))
    }
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
          <TitleStyle>Подтверждение email</TitleStyle>
          <SubTitleStyle>
            Пожалуйста напишите код подтверждения, который был отправлен на вашу почту
          </SubTitleStyle>
          <FormItemStyle
            name="code"
            rules={[{ required: true, message: 'Требуется код потверждения' }]}
          >
            <MaskedInput
              variant="filled"
              size="large"
              style={{ fontSize: '24px', textAlign: 'center' }}
              mask={'0000'}
            />
          </FormItemStyle>
          
          <ButtonStyle type="primary" htmlType="submit" loading={loading}>
            Отправить
          </ButtonStyle>
        </Flex>
      </FormStyle>
    </>
  );
};

export default ConfirmCodeForm;