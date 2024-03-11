import { FC, useState } from 'react';
import { Button } from 'antd';
import Modal from '@/modules/teams/ui/modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'antd/es/input/Input';
import UploadImage from '@/shared/ui/UploadImage';
import { BiImageAdd } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { createTeamAction } from '../model/teams.slice';
import { useSelector } from '@/store';
import { companySelector } from '@/modules/company/model/company.slice';

interface TeamCreateFormValues {
  teamName: string
  email: string
  logo: string
}

const TeamCreateSchema = Yup.object().shape({
  teamName: Yup.string()
    .required('Требуется название команды'),
  email: Yup.string()
    .matches(
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Неверный адрес электронной почты'
    )
    .required('Требуется электронная почта')
})

const TeamCreate: FC = () => {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState<string>('')
  const dispatch = useDispatch()
  const companyId = useSelector(companySelector)?.id as number

  const formik = useFormik<TeamCreateFormValues>({
    initialValues: {
      teamName: '',
      email: '',
      logo: ''
    },
    validationSchema: TeamCreateSchema,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      dispatch(createTeamAction({
        name: values.teamName,
        logo: image,
        email: values.email,
        companyId: companyId
      }))
      setOpen(false)
      setImage('')
      resetForm()
    },
  })

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false)
    formik.resetForm();
    setImage('')
  }

  return (
    <div className="rounded-[10px] self-center border-spacing-1 border-gray-100 border-[1px] p-4 bg-white w-full">
      <Button className="w-full" type='link' onClick={openModal}>Создать команду</Button>
      <Modal 
        title='Создать команду' 
        open={open} 
        close={closeModal} 
        submit={formik.handleSubmit}
        submitButton='Создать'
      >
        <div className="w-[94%] border-0 flex flex-col">
          <div className="space-y-1 mb-[20px]">
            <Input
              id="teamName"
              onChange={formik.handleChange}
              value={formik.values.teamName}
              placeholder='Название команды'
              className='h-[56px] text-base placeholder:text-[#4f7596] border-[#d1dbe8] max-[510px]:placeholder:text-[12px]'
            />
            {formik.errors.teamName && (
              <div className="!mb-[-24px] text-rose-500 ml-1 text-sm">{formik.errors.teamName}</div>
            )}
          </div>
          <div className="space-y-1 mb-[20px]">
            <Input
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder='Введите почту менеджера'
              className='h-[56px] text-base placeholder:text-[#4f7596] border-[#d1dbe8] hover:border-[#d1dbe8] max-[510px]:placeholder:text-[12px]'
            />
            {formik.errors.email && (
              <div className="!mb-[-24px] text-rose-500 ml-1 text-sm">{formik.errors.email}</div>
            )}
          </div>
          <div className="space-y-1 mb-[20px]">
            <UploadImage 
              value={formik.values.logo} 
              label='Загрузите изображение команды' 
              image={image} 
              setImage={setImage}
              leftContent={<BiImageAdd className='w-full h-full fill-[#4F7596]'/>} 
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default TeamCreate;