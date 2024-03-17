import { FC, useState } from 'react';
import { Button, Flex, Form, Input } from 'antd';
import Modal from '@/modules/teams/ui/modal';
import { useDispatch } from 'react-redux';
import { createTeamAction } from '../model/teams.slice';
import { useSelector } from '@/store';
import { companySelector } from '@/modules/company/model/company.slice';
import styled from 'styled-components';
import { COLORS } from '@/shared/lib/constants';
import UploadImage from '@/shared/ui/UploadImage';
import { BiImageAdd } from 'react-icons/bi';

interface TeamCreateFormValues {
  teamName: string
  email: string
  logo: string
}

const DivStyle = styled('div')`
  border-radius: 10px;
  align-self: center;
  border-spacing: 0.25rem 0.25rem;
  border: solid 1px ${COLORS.SECONDARY[5]};
  padding: 16px;
  background: ${COLORS.LIGHT[0]};
  width: 100%;
  & button {
    width: 100%;
  }
`
const FormStyle = styled(Form)`
  width: 94%;
`
const FormItemStyle = styled(Form.Item<TeamCreateFormValues>)`
  width: 100%;
  & input {
    border-color: ${COLORS.LIGHT[6]};
    &::placeholder {
      color: ${COLORS.LIGHT[7]};
    }
  }
  @media(max-width: 510px) {
    input {
      font-size: 12px;
    }
  }
`
const ButtonStyle = styled(Button)`
  width: 173px;
  height: 40px;
  margin: 0 auto;
`

const TeamCreate: FC = () => {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState<string>('')
  const [form] = Form.useForm<TeamCreateFormValues>()
  const dispatch = useDispatch()
  const companyId = useSelector(companySelector)?.id as number

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false)
    form.resetFields()
    setImage('')
  }

  const onFinish = (values: TeamCreateFormValues) => {
    dispatch(createTeamAction({
      name: values.teamName,
      logo: values.logo,
      email: values.email,
      companyId: companyId
    }))
    closeModal()
  };

  const handelChange = (img: string) => {
    form.setFieldValue('logo', img)
    setImage(img)
  }

  return (
    <DivStyle>
      <Button type='link' onClick={openModal}>Создать команду</Button>
      <Modal 
        title='Создать команду' 
        open={open} 
        close={closeModal} 
      >
        <FormStyle
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          form={form}
        >
          <Flex gap={10} justify="center" vertical>
            <FormItemStyle
              name="teamName"
              rules={[{ required: true, message: 'Введите название команды' }]}>
              <Input size='large' placeholder='Название команды'/>
            </FormItemStyle>
            <FormItemStyle
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'Не корректный E-mail!',
                },
                { 
                  required: true,
                  message: 'Введите электронную почту менеджера' 
                }
              ]}
            >
              <Input size='large' placeholder='Введите почту менеджера'/>
            </FormItemStyle>
            <FormItemStyle
              name="logo"
            >
              <UploadImage 
                label='Загрузите изображение команды' 
                image={image} 
                setImage={handelChange}
                leftContent={<BiImageAdd style={{ width: '100%', height: '100%', fill: COLORS.PRIMARY[5] }}/>} 
              />
            </FormItemStyle>
            <ButtonStyle htmlType="submit" type='primary'>Создать</ButtonStyle>
          </Flex>
        </FormStyle>
      </Modal>
    </DivStyle>
  )
}

export default TeamCreate;