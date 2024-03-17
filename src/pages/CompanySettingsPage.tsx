import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from '@/store';
import {
  companySelector,
  updateCompanyAction,
} from '@/modules/company/model/company.slice.ts';

import { useDispatch } from 'react-redux';
import { toast } from '@/shared/shadcnUI/use-toast';
import {
  isFileTypeSupported,
} from '@/shared/lib/utils.ts';
import { Company } from '@/modules/company/model/company.types';
import { Upload, Form, UploadFile, Flex, Button, } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { UploadChangeParam } from 'antd/es/upload';
import Title from 'antd/es/typography/Title';
import Input from 'antd/lib/input';


export const CompanySettingsPage = () => {
  const [image, setImage] = useState<UploadFile>();
  const company = useSelector(companySelector);
  const dispatch = useDispatch();
  const serverCompanyData = company as Company;
  const [base64, setBase64] = useState('')
  const [name, setName] = useState (company?.name || '')
  const [ss, setSS] = useState< Array<UploadFile>>([
    {
      uid: '1',
      name: 'default.png',
      status: 'done',
      url: `${serverCompanyData.logo}`,
    },
  ])
  const [disableButton, setDisableButton] = useState(false)

  const handleSubmit = () =>{
    dispatch(
      updateCompanyAction({
        name: name,
        bin: serverCompanyData.bin,
        employeeNumbers: serverCompanyData.employeeNumbers,
        logo: base64,
        id: serverCompanyData.id,
      })
    )
  }
  useEffect(() => {
    const base = image?.thumbUrl as string
    setBase64(base);
  }, [image])


  const companyNameValue = (e:ChangeEvent<HTMLInputElement>) =>{
    setDisableButton(false)
    setName(e.target.value)
    console.log(ss)
    console.log(serverCompanyData.logo)
  }


  const  fileHandleChange  = async ( e: UploadChangeParam<UploadFile<unknown>>) => {
    setDisableButton(false)
    const file = e.file as UploadFile
    if (
      !isFileTypeSupported(file.type as string, ['image/png', 'image/jpeg', 'image/gif'])
    ) {
      toast({
        variant: 'destructive',
        description: 'Только следующие форматы поддерживаются: PNG, JPEG, GIF',
      });
      return;
    }
    setSS([e.file])
    setImage(file)
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const base = await image?.thumbUrl as string
    setBase64(base)
  };


  return (
    <>
      <Flex justify='centr' align='centr'>
        <Flex vertical justify='centr' align='centr' style={{ width: '100%', paddingTop: '50px', paddingBottom: '50px', }} >
          <Flex style={{ width: '100%', marginBottom: '12px' }}>
            <Title level={2}>
              Настройки компании
            </Title>
          </Flex>
          <Flex style={{ width: '100%', marginBottom: '8px' }}>
            <Title level={4}>Название компании</Title>
          </Flex>
          <Flex vertical= {true} style={{ width: '100%' }}>
            <div className='space-y-1 mb-[20px]'>
              <Input
                id='name'
                onChange={companyNameValue}
                value={name}
              />
            </div>
            <Form >
              <Form.Item label="Upload" valuePropName="fileList">
                <Upload action={'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188' }
                  listType="picture-card" maxCount= {1} onChange={fileHandleChange}  fileList={ss}>
                  <button style={{ border: 0, background: 'none' }} type="button">
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Сменить логотип</div>
                  </button>
                </Upload>
              </Form.Item>
            </Form>
            <Flex justify='end' style={{ marginTop: '12px' }}>
              <Button size='middle' onClick={ () => { 
                setSS([
                  {
                    uid: '1',
                    name: 'default.png',
                    status: 'done',
                    url: `${serverCompanyData.logo}`,
                  },
                ])
                setName(serverCompanyData.name); 
                setDisableButton(true)
              }}>
                Отменить
              </Button>
              <Button type="primary" size='middle' style={{ marginLeft: '20px' }} disabled={disableButton} onClick={() => {
                handleSubmit();
              }}>
            Сохранить
              </Button>
            </Flex>
          </Flex>
        </Flex>

      </Flex>
    </>
  );
};

export default CompanySettingsPage;

