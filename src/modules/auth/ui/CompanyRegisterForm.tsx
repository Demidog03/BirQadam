import { Button } from '@/shared/shadcnUI/button.tsx';
import { Input } from '@/shared/shadcnUI/input.tsx';
import { ChangeEvent, FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { authLoadingSelector, companyRegister } from '@/modules/auth/model/auth.slice.ts';
import BackdropLoading from '@/shared/ui/BackdropLoading.tsx';
import { useSelector } from '@/store';
import { Label } from '@/shared/shadcnUI/label';



interface CompanyRegisterFormValues {
    companyName: string
    BIN: string
    numberOfEmployees : number | string
    companyLogo: string
}

const CompanyRegisterSchema = Yup.object().shape({
  companyName: Yup.string()
    .required('Заполните поле'),
  BIN: Yup.string()
    .required('Заполните поле'),
  numberOfEmployees: Yup.number()
    .required('Заполните поле')
})

const CompanyRegisterForm: FC = () => {
  const dispatch = useDispatch()
  const loading = useSelector(authLoadingSelector)
  const [image, setImage] = useState('')

  const formik = useFormik<CompanyRegisterFormValues>({
    initialValues: {
      companyName: '',
      BIN: '',
      numberOfEmployees: '',
      companyLogo: ''
    },
    validationSchema: CompanyRegisterSchema,
    onSubmit: values => {
      dispatch(companyRegister({
        companyName: values.companyName,
        BIN: values.BIN,
        numberOfEmployees: values.numberOfEmployees,
        companyLogo: values.companyLogo,
      }))
    },
  })
  const fileHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFileList = e.target.files as FileList;
    const imagefile = imageFileList[0];
    const reader = new FileReader();
    reader.readAsDataURL(imagefile)
    reader.onload = () => {
      const result = reader.result as string
      console.log(reader.result);
      setImage(result);
    };

  }
  return (
    <>
      <div className="flex  justify-center items-center">
        <div className="flex flex-col w-full min-h-screen h-full py-[50px] justify-center items-center gap-10" style={{ maxWidth: '34rem' }}>
          <h1 className="slite-950 text-4xl font-bold text-center" style={ { fontSize: '32px', lineHeight: '40px' }}>Зарегистрируйте вашу компанию</h1>
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
                className='border-0'
                type='file'
                onChange={fileHandleChange}
                value={formik.values.companyLogo}
                style={{ display: 'none' }}
                accept=".png,.jpg,.jpeg,.gif"
                
              />
            </div>
                
            <div ><img src={image} style={{ maxHeight: '100px', maxWidth: '100px', marginBottom:'20px' }} /></div>
            <Button type="button" className=' bg-[#1A8AE5] hover:bg-[#0369A1]' onClick={() => {formik.handleSubmit()}}>Продолжить</Button>

          </div>
          <BackdropLoading loading={loading}/>
        </div>
      </div>
    </>
  );
};

export default CompanyRegisterForm;

