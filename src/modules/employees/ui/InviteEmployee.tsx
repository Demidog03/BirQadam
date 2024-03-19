import { Input } from '@/shared/shadcnUI/input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IoIosAddCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { inviteEmployeeAction } from '../model/employee.slice';
import { inviteEmployeeRequest } from '../api/employees.api.types';
import { profileSelector } from '@/modules/profile/model/profile.slice';
import { tokenSelector } from '@/modules/auth/model/auth.slice';

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
  const token = useSelector(tokenSelector);
  const profileData = useSelector(profileSelector)

  const dispatch = useDispatch();


  const formik = useFormik<inviteEmployeeRequest>({
    initialValues: {
      recipient_email: '',
      invite_type: '',
      team_id: 0,
      company_id: 0,
    },
    validationSchema: ValueSchema,
    onSubmit: (value, { resetForm }) => {
      console.log(token)
      dispatch(inviteEmployeeAction({
        recipient_email: value.recipient_email,
        invite_type: '241',
        team_id: profileData?.team?.id || 0,
        company_id: profileData?.company?.id || 0,
      }))
      resetForm()
    },
  })
  return (
    <div className='flex items-center w-full h-[56px] my-8 mx-3 max-[430px]:h-[50px]'>
      <Input
        className='max-w-[480px] h-full border-[#d1dbe8] rounded-xl text-base placeholder:text-[#4f7596] max-[430px]:text-[14px]'
        id="recipient_email"
        placeholder='Введите почту сотрудника'
        onChange={formik.handleChange}
        value={formik.values.recipient_email}
      />
      {formik.errors.recipient_email && (
        <div className="text-red-900 text-sm">{formik.errors.recipient_email}</div>
      )}
      <IoIosAddCircle onClick={() => {formik.handleSubmit()}} className='h-[56px] w-[56px] ml-3 fill-[#5d7285] cursor-pointer ease-in-out hover:fill-[#5D6A86] max-[430px]:h-[50px] max-[430px]:w-[50px]'/>
    </div>
  )
}

export default InviteEmployee