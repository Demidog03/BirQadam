import { Input } from '@/shared/shadcnUI/input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IoIosAddCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { profileSelector } from '@/modules/profile/model/profile.slice';
import { InviteEmployeeValues } from '../model/employee.types';
import { inviteEmployeeAction } from '../model/employee.slice';

export interface Values {
  email: string
}

const ValueSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email'
    )
})

const InviteEmployee = () => {
  const profileData = useSelector(profileSelector)

  const dispatch = useDispatch();


  const formik = useFormik<InviteEmployeeValues>({
    initialValues: {
      recipientEmail: '',
      inviteType: '',
      teamId: 0,
      companyId: 0,
    },
    validationSchema: ValueSchema,
    onSubmit: (value, { resetForm }) => {
      dispatch(inviteEmployeeAction({
        recipientEmail: value.recipientEmail,
        inviteType: '241',
        teamId: profileData?.team?.id || 0,
        companyId: profileData?.company?.id || 0,
      }))
      resetForm()
    },
  })
  return (
    <div className='flex items-center w-full h-[56px] my-8 mx-3 max-[430px]:h-[50px]'>
      <Input
        className='max-w-[480px] h-full border-[#d1dbe8] rounded-xl text-base placeholder:text-[#4f7596] max-[430px]:text-[14px]'
        id="recipientEmail"
        placeholder='Введите почту сотрудника'
        onChange={formik.handleChange}
        value={formik.values.recipientEmail}
      />
      {formik.errors.recipientEmail && (
        <div className="text-red-900 text-sm">{formik.errors.recipientEmail}</div>
      )}
      <IoIosAddCircle onClick={() => {formik.handleSubmit()}} className='h-[56px] w-[56px] ml-3 fill-[#5d7285] cursor-pointer ease-in-out hover:fill-[#5D6A86] max-[430px]:h-[50px] max-[430px]:w-[50px]'/>
    </div>
  )
}

export default InviteEmployee