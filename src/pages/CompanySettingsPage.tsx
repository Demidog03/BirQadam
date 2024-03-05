import { Input } from '@/shared/shadcnUI/input';
import { Label } from '@/shared/shadcnUI/label';
import { ChangeEvent, useState } from 'react';
import { Button } from '@/shared/shadcnUI/button';
import { useSelector } from '@/store';
import {
  companySelector,
  updateCompanyAction,
} from '@/modules/company/model/company.slice.ts';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { toast } from '@/shared/shadcnUI/use-toast';
import {
  convertFileToBase64,
  isFileTypeSupported,
} from '@/shared/lib/utils.ts';
import { Company } from '@/modules/company/model/company.types';

const CompanySettingsSchema = Yup.object().shape({
  name: Yup.string().required('Требуется название компании'),
});

export const CompanySettingsPage = () => {
  const [image, setImage] = useState('');
  const company = useSelector(companySelector);
  const dispatch = useDispatch();
  const serverCompanyData = company as Company;

  const formik = useFormik<Company>({
    initialValues: {
      name: serverCompanyData.name,
      id: serverCompanyData.id,
      bin: serverCompanyData.bin,
      employeeNumbers: serverCompanyData.employeeNumbers,
      logo: serverCompanyData.logo,
    },
    validationSchema: CompanySettingsSchema,
    onSubmit: (values) => {
      console.log(values);
      console.log(image);
      dispatch(
        updateCompanyAction({
          name: values.name,
          bin: serverCompanyData.bin,
          employeeNumbers: serverCompanyData.employeeNumbers,
          logo: image.split(',')[1],
          id: serverCompanyData.id,
        })
      );
    },
  });

  const fileHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      toast({
        variant: 'destructive',
        description: 'Выберите файл для загрузки.',
      });
      return;
    }

    if (
      !isFileTypeSupported(file.type, ['image/png', 'image/jpeg', 'image/gif'])
    ) {
      toast({
        variant: 'destructive',
        description: 'Только следующие форматы поддерживаются: PNG, JPEG, GIF',
      });
      return;
    }

    convertFileToBase64(file, (result) => {
      if ('error' in result) {
        toast({
          variant: 'destructive',
          description: result.error,
        });
      } else {
        console.log(result);
        setImage(result.image);
      }
    });
  };

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col w-full py-[50px] justify-center items-center'>
          <div className='flex w-[100%] mb-[12px]'>
            <h1 className='slite-950 font-bold text-left text-[32px]/[40px]'>
              Настройки компании
            </h1>
          </div>
          <div className='flex w-[100%] mb-[8px]'>
            <h4 className='font-semibold leading-6 text-left'>
              Название компании
            </h4>
          </div>
          <div className='w-[100%] border-0 flex flex-col'>
            <div className='space-y-1 mb-[20px]'>
              <Input
                id='name'
                className=' h-[56px] text-base'
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            {formik.errors.name && (
              <div className='text-rose-500 ml-1 text-sm !mb-[-24px]'>
                {formik.errors.name}
              </div>
            )}
            <div className='flex w-[100%] justify-start items-center'>
              <div>
                <img
                  src={company?.logo || image}
                  className=' max-h-[70px] max-w-[75px] rounded-lg'
                />
              </div>
              <div className='space-y-1 '>
                <Label
                  className=' cursor-pointer text-[16px] text-[#0D141C] ml-[16px] font-medium'
                  htmlFor='logo'
                >
                  Сменить логотип
                </Label>
                <Input
                  id='logo'
                  className='border-0 hidden'
                  type='file'
                  onChange={(e) => {
                    fileHandleChange(e);
                  }}
                  accept='.png,.jpg,.jpeg,.gif'
                  value={formik.values.logo}
                />
              </div>
            </div>
            <div className='flex justify-end mt-[12px]'>
              <Button
                type='reset'
                className='hover:bg-[#C0C0C0] mr-[10px] rounded-xl'
                variant='secondary'
                onClick={ () => { formik.resetForm({ values: formik.initialValues }); setImage('')}}
              >
                Отменить
              </Button>
              <Button
                type='button'
                className=' bg-[#1A8AE5] hover:bg-[#0369A1] rounded-xl'
                onClick={() => {
                  formik.handleSubmit();
                }}
              >
                Сохранить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanySettingsPage;

