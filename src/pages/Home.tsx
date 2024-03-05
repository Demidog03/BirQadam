import { FC } from 'react';
import CourseDashboard from '@/modules/courses/ui/dashboard/CourseDashboard.tsx';
import ContentWithTitleLayout from '@/shared/lib/layouts/ContentWithTitleLayout.tsx';
import CourseRecommended from '@/modules/courses/ui/recommended/CourseRecommended.tsx';
import ContinueLearningCourseCard from '@/modules/courses/ui/continue/ContinueLearningCourseCard.tsx';

const Home: FC = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <ContentWithTitleLayout title='Dashboard'>
          <CourseDashboard/>
        </ContentWithTitleLayout>
        <ContentWithTitleLayout title="Continue learning">
          <ContinueLearningCourseCard title="Learn to create frontend" category="Frontend" currentLessons={12} totalLessons={15} imageSrc="https://res.cloudinary.com/practicaldev/image/fetch/s--mgVodcWf--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pp4ll13f5onw4gqj8ggl.jpg"/>
        </ContentWithTitleLayout>
      </div>
      <ContentWithTitleLayout title="Recommended Courses">
        <CourseRecommended/>
      </ContentWithTitleLayout>
    </div>
  );
};

export default Home;