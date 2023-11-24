import { FC } from 'react';
import CourseDashboardCard from '@/modules/courses/CourseDashboardCard.tsx';


const CourseDashboard: FC = () => {
  return (
    <div className="flex gap-4">
      <CourseDashboardCard status="Ongoing" amount={5}/>
      <CourseDashboardCard status="Completed" amount={23}/>
      <CourseDashboardCard status="Certificate" amount={19}/>
    </div>
  );
};

export default CourseDashboard;