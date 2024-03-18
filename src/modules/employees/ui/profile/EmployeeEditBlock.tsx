import { FC, useState } from 'react';
import { Card } from '@/shared/shadcnUI/card.tsx';
import { Button } from '@/shared/shadcnUI/button.tsx';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { profileSelector, updateProfileAction } from '@/modules/profile/model/profile.slice.ts';
import { useSelector } from '@/store';
import { companySelector } from '@/modules/company/model/company.slice.ts';

interface EmployeeEditValues {
  imageSrc: string;
  email: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
}

const EmployeeEditBlock: FC = () => {
  const profile = useSelector(profileSelector);
  const company = useSelector(companySelector);
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);

  const formik = useFormik({
    initialValues: {
      imageSrc: company?.logo || '',
      email: profile?.email || '',
      firstName: profile?.firstName || '',
      lastName: profile?.lastName || '',
      jobTitle: profile?.jobTitle || '',
    },
    onSubmit:  (values: EmployeeEditValues) => {
      dispatch(updateProfileAction(values));
      setIsEditMode(false);
    },
  });

  const handleEditProfileClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleSaveClick = async () => {
    await formik.submitForm();
    setIsEditMode(false);
  };

  const handleCancelClick = () => {
    formik.resetForm();
    setIsEditMode(false);
  };

  return (
    <div className="w-full">
      <Card className="flex gap-4 items-center w-full p-[20px] border-0 shadow-none rounded-none">
        <form onSubmit={formik.handleSubmit} className="flex justify-between w-full">
          <div className="flex justify-between w-full">
            <div className="flex items-center w-[50%]">
              <img className="w-[90px] h-[90px] rounded-[50px] object-cover" src={formik.values.imageSrc} alt={formik.values.imageSrc} />
              <div className="flex flex-col ml-6 w-full">
                <input
                  disabled={!isEditMode}
                  className="font-public-sans font-bold text-22 leading-27.5 tracking-wide text-black"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  name="firstName"
                />
                <input
                  disabled={!isEditMode}
                  className="font-public-sans font-bold text-22 leading-27.5 tracking-wide text-black"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  name="lastName"
                />
                <div className="flex flex-col justify-between font-public-sans font-normal text-16 leading-24 text-[#4F7596]">
                  <input
                    value={formik.values.jobTitle}
                    disabled={!isEditMode}
                    onChange={formik.handleChange}
                    name="jobTitle"
                  />
                  <input
                    value={formik.values.email}
                    disabled={!isEditMode}
                    onChange={formik.handleChange}
                    name="email"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {isEditMode ? (
                <>
                  <Button type="button" onClick={handleSaveClick} className="w-10 px-14 bg-[#E8EDF2] text-black rounded-xl hover:text-white">
                    Save
                  </Button>
                  <Button type="button" onClick={handleCancelClick} className="w-10 px-14 bg-[#E8EDF2] text-black rounded-xl hover:text-white ml-2">
                    Cancel
                  </Button>
                </>
              ) : (
                <Button type="button" onClick={handleEditProfileClick} className="w-10 px-14 bg-[#E8EDF2] text-black rounded-xl hover:text-white">
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default EmployeeEditBlock;
