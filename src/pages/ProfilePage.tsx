import { FC } from 'react';
import EmployeeEditBlock from '@/modules/employees/ui/profile/EmployeeEditBlock.tsx';
import ProfileLayout from '@/shared/lib/layouts/ProfileLayout.tsx';
import EmployeeProgress from '@/modules/employees/ui/profile/EmployeeProgress.tsx';
import EmployeeProfileTabs from '@/modules/employees/ui/profile/EmployeeProfileTabs.tsx';

const ProfilePage: FC = () => {
  return (
    <div className="w-full h-full">
      <div  className={'flex justify-center'}>
        <ProfileLayout>
          <EmployeeEditBlock/>
          <EmployeeProgress averageScore={87} completedCoursesCount={12}/>
          <EmployeeProfileTabs/>
        </ProfileLayout>
      </div>
    </div>
  );
};

export default ProfilePage;