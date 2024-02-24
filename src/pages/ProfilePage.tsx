import { FC } from 'react';
import EmployeeEditBlock from "@/modules/employeeProfile/ui/EmployeeEditBlock.tsx";
import ProfileLayout from "@/shared/lib/layouts/ProfileLayout.tsx";
import EmployeeProgress from "@/modules/employeeProfile/ui/EmployeeProgress.tsx";
import EmployeeProfileTabs from "@/modules/employeeProfile/ui/EmployeeProfileTabs.tsx";
import Navbar from "@/modules/navbar/ui/Navbar.tsx";
import {useSelector} from "@/store";
import {profileSelector} from "@/modules/profile/model/profile.slice.ts";


const ProfilePage: FC = () => {
    const profile = useSelector(profileSelector)
    return (
        <div className="w-full h-full">
            <Navbar/>
            <div  className={`flex justify-center`}>
            <ProfileLayout>
                <EmployeeEditBlock
                    imageSrc={'https://s3-alpha-sig.figma.com/img/d5b7/782f/099a5512f6738ed39688ce19e7b62431?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhhdSaENlvJ27ha0F5q16xz3B5XmbhFl--v3K6UudmiQeiofh4~1uRbdaviul5H1GQyLKPIpDM8hZbUuq76218kB5fQ1-bh2tBEhFyVy602FWaoh7qKM1flr0w9dQFI~hM1CkpRhQteHscGXG338EQgtF1N-9RgBM2EBINTHmacn5UHLpBoHt9vXiqjZ5D~UO5pigoQLZkxHDVOZ8O90bmHMF0WCNdgLDw~o~u02X~7abJebhIihaxvymA53j5rUdjQHPcIITc937yvLwG8anLQSXkbb4BqUcW14-rmJcEg0-suOzpOTgMB4p7~QbamCTYXYGWCv9ypVbvgICZaSJw__'}
                    firstName={profile?.firstName || 'Katie'}
                    lastName={profile?.lastName || 'Jones'}
                    position={'s'}
                    company={'s'}/>
                <EmployeeProgress averageScore={87} completedCoursesCount={12}/>
                <EmployeeProfileTabs/>
            </ProfileLayout>
            </div>
        </div>
    );
};

export default ProfilePage;