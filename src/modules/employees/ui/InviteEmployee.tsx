import { Input } from '@/shared/shadcnUI/input';
import { useFormik } from 'formik';
import { FC } from 'react'
import * as Yup from 'yup';
import { IoIosAddCircle } from 'react-icons/io';

interface Values {
  email: string
}

interface InviteEmployeeParams {
  handleChange: (value: string) => void
}

const ValueSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email'
    )
})

const InviteEmployee: FC<InviteEmployeeParams> = ({ handleChange }) => {
  const formik = useFormik<Values>({
    initialValues: {
      email: '',
    },
    validationSchema: ValueSchema,
    onSubmit: (value, { resetForm }) => {
      handleChange(value.email)
      resetForm()
    },
  })
  return (
    <div className='flex items-center w-full h-[56px] my-8 mx-3 max-[430px]:h-[50px]'>
      <Input
        className='max-w-[480px] h-full border-[#d1dbe8] rounded-xl text-base placeholder:text-[#4f7596] max-[430px]:text-[14px]'
        id="email"
        placeholder='Введите почту сотрудника'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && (
        <div className="text-red-900 text-sm">{formik.errors.email}</div>
      )}
      <IoIosAddCircle onClick={() => {formik.handleSubmit()}} className='h-[56px] w-[56px] ml-3 fill-[#5d7285] cursor-pointer ease-in-out hover:fill-[#5D6A86] max-[430px]:h-[50px] max-[430px]:w-[50px]'/>
    </div>
  )
}

export default InviteEmployee