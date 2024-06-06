import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '@/store';
import { fetchProfile, profileLoadingSelector } from '@/modules/profile/model/profile.slice.ts';
import { createCompanyAction } from '@/modules/company/model/company.slice.ts';
import {
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  message,
  Typography, UploadFile,
} from 'antd';
import styled from 'styled-components';
import { COLORS } from '@/shared/lib/constants.ts';
import { BiSolidBusiness, BiSolidGroup, BiSolidLandmark } from 'react-icons/bi';
import UploadWithModal from '@/shared/ui/UploadWithModal.tsx';

interface CompanyRegisterFormValues {
    companyName: string
    BIN: string
    numberOfEmployees : number | string
    companyLogo: string
}

const FormStyle = styled(Form)`
  max-width: 700px;
  width: 100%;
  padding: 40px;
  border-radius: 12px;
`
const FormItemStyle = styled(Form.Item<CompanyRegisterFormValues>)`
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

const CompanyRegisterForm: FC = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm<CompanyRegisterFormValues>();
  const loading = useSelector(profileLoadingSelector(fetchProfile.type))

  const onFinish = (values: CompanyRegisterFormValues) => {
    console.log(values)

    dispatch(createCompanyAction({
      name: values.companyName,
      bin: values.BIN,
      employeeNumbers: +values.numberOfEmployees,
      logo: values.companyLogo
    }))
  };

  const fileHandleUpload = (files: UploadFile[]) => {
    if (!files[0]) {
      void message.error('Выберите файл для загрузки')
      return;
    }

    form.setFieldValue('companyLogo', files[0].thumbUrl);
    void form.validateFields();
  }

  return (
    <>
      <FormStyle
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <Flex gap={2} align="center" justify="center" vertical>
          <TitleStyle>Создать компанию</TitleStyle>
          <SubTitleStyle>
            Пожалуйста, зарегистрируйте вашу компанию
          </SubTitleStyle>
          <FormItemStyle
            name="companyName"
            rules={[{ required: true, message: 'Требуется название компании' }]}
          >
            <Input
              variant="outlined"
              size="large"
              placeholder="Название компании"
              prefix={<BiSolidBusiness style={{ color: COLORS.PRIMARY[3] }}/>}
            />
          </FormItemStyle>
          <FormItemStyle
            name="BIN"
            rules={[{ required: true, message: 'Требуется название компании' }]}
          >
            <Input
              variant="outlined"
              size="large"
              placeholder="БИН"
              prefix={<BiSolidLandmark style={{ color: COLORS.PRIMARY[3] }}/>}
            />
          </FormItemStyle>
          <FormItemStyle
            name="numberOfEmployees"
            rules={[{ required: true, message: 'Требуется название компании' }]}
          >
            <InputNumber
              variant="outlined"
              size="large"
              placeholder="Количество сотрудников"
              prefix={<BiSolidGroup style={{ color: COLORS.PRIMARY[3] }}/>}
              style={{ width: '100%' }}
            />
          </FormItemStyle>
          <FormItemStyle
            name="companyLogo"
          >
            <UploadWithModal maxCount={1} allowedFileTypes={['image/png', 'image/jpeg', 'image/gif']} handleUploadFinished={fileHandleUpload}/>
          </FormItemStyle>

          <ButtonStyle type="primary" htmlType="submit" loading={loading}>
            Подтвердить
          </ButtonStyle>
        </Flex>
      </FormStyle>
    </>
  );
};

export default CompanyRegisterForm;

