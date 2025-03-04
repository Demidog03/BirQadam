import { Button } from '@/shared/shadcnUI/button.tsx';
import { Input } from '@/shared/shadcnUI/input.tsx';
import { ChangeEvent, FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import BackdropLoading from '@/shared/ui/BackdropLoading.tsx';
import { useSelector } from '@/store';
import { Label } from '@/shared/shadcnUI/label.tsx';
import { fetchProfile, profileLoadingSelector } from '@/modules/profile/model/profile.slice.ts';
import { convertFileToBase64, isFileTypeSupported } from '@/shared/lib/utils.ts';
import { useToast } from '@/shared/shadcnUI/use-toast.tsx';
import { createCompanyAction } from '@/modules/company/model/company.slice.ts';

interface CompanyRegisterFormValues {
    companyName: string
    BIN: string
    numberOfEmployees : number | string
    companyLogo: string
}

const CompanyRegisterSchema = Yup.object().shape({
  companyName: Yup.string()
    .required('Требуется название компании'),
  BIN: Yup.string()
    .required('Требуется БИН'),
  numberOfEmployees: Yup.number()
    .required('Требуется кол-во сотрудников в компании')
})

const CompanyRegisterForm: FC = () => {
  const dispatch = useDispatch()
  const { toast } = useToast()
  const [image, setImage] = useState('')
  const loading = useSelector(profileLoadingSelector(fetchProfile.type))

  const formik = useFormik<CompanyRegisterFormValues>({
    initialValues: {
      companyName: '',
      BIN: '',
      numberOfEmployees: '',
      companyLogo: ''
    },
    validationSchema: CompanyRegisterSchema,
    validateOnChange: false,
    onSubmit: values => {
      dispatch(createCompanyAction({
        name: values.companyName,
        bin: values.BIN,
        employeeNumbers: +values.numberOfEmployees,
        logo: values.companyLogo.split(',')[1],
      }))
    },
  })
  const fileHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      toast({
        variant: 'destructive',
        description: 'Выберите файл для загрузки.',
      });
      return;
    }

    if (!isFileTypeSupported(file.type, ['image/png', 'image/jpeg', 'image/gif'])) {
      toast({
        variant: 'destructive',
        description:
          'Только следующие форматы поддерживаются: PNG, JPEG, GIF',
      });
      return;
    }

    convertFileToBase64(file, (result => {
      if ('error' in result) {
        toast({
          variant: 'destructive',
          description: result.error,
        });
      }
      else {
        console.log(result)
        setImage(result.image);
      }
    }))
  }
  return (
    <>
      <div className="flex  justify-center items-center">
        <div className="flex flex-col w-full min-h-screen h-full py-[50px] justify-center items-center gap-10 max-w-[34rem]" >
          <h1 className="slite-950 font-bold text-center text-[32px]/[40px]" >Зарегистрируйте вашу компанию</h1>
          <div className="w-[94%] border-0 flex flex-col">
            <div className="space-y-1 mb-[30px]">
              <Input
                id="companyName"
                onChange={formik.handleChange}
                value={formik.values.companyName}
                placeholder='Название компании'
                className=' h-[56px] text-base'
              />
              {formik.errors.companyName && (
                <div className="!mb-[-24px] text-rose-500 ml-1 text-sm">{formik.errors.companyName}</div>
              )}
            </div>
            <div className="space-y-1 mb-[30px]">
              <Input
                id="BIN"
                onChange={formik.handleChange}
                value={formik.values.BIN}
                placeholder='БИН'
                className=' h-[56px] text-base'  
              />
              {formik.errors.BIN && (
                <div className="text-rose-500 ml-1 text-sm !mb-[-24px]">{formik.errors.BIN}</div>
              )}
            </div>
            <div className="space-y-1">
              <Input
                type='number'
                id="numberOfEmployees"
                onChange={formik.handleChange}
                value={formik.values.numberOfEmployees}
                placeholder='Количество сотрудников'
                className='h-[56px] text-base'  
              />
              {formik.errors.numberOfEmployees && (
                <div className="text-rose-500 ml-1 text-sm !mb-[-24px]">{formik.errors.numberOfEmployees}</div>
              )}
            </div>
            <div className="space-y-1 my-[24px]">
              <Label htmlFor="companyLogo" className=' text-[14px] ml-1 font-normal text-[#4F7596] cursor-pointer'>Загрузите логотип компании</Label>
              <Input
                id='companyLogo'
                className='border-0 hidden'
                type='file'
                onChange={fileHandleChange}
                value={formik.values.companyLogo}
                accept=".png,.jpg,.jpeg,.gif"

              />
            </div>
                
            <div ><img src={image} className=' max-h-[100px] max-w-[100px] mb-[20px]' /></div>
            <Button type="button" className=' bg-[#1A8AE5] hover:bg-[#0369A1]' onClick={() => {formik.handleSubmit()}}>Продолжить</Button>
          </div>
        </div>
        <BackdropLoading loading={loading}/>
      </div>
    </>
  );
};

export default CompanyRegisterForm;

