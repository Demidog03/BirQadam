import { FC } from 'react';
import CourseRecommendedCard from '@/modules/courses/ui/recommended/CourseRecommendedCard.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const CourseRecommended: FC = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          850: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          1140: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          1708: {
            slidesPerView: 5,
            spaceBetween: 30
          },
        }}
      >
        <SwiperSlide className="h-auto">
          <CourseRecommendedCard
            image="https://res.cloudinary.com/practicaldev/image/fetch/s--mgVodcWf--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pp4ll13f5onw4gqj8ggl.jpg"
            category="Frontend"
            title="Learn to create frontend"
            lessonTotal={16}/>
        </SwiperSlide>
        <SwiperSlide className="h-auto">
          <CourseRecommendedCard
            image="https://infoshareacademy.com/blog/wp-content/uploads/2021/06/Frontend-1.png"
            category="Design"
            title="Learn to design web applications"
            lessonTotal={13}/>
        </SwiperSlide>
        <SwiperSlide className="h-auto">
          <CourseRecommendedCard
            image="https://kinsta.com/wp-content/uploads/2021/09/front-end-developer-salary.jpg"
            category="Backend"
            title="Learn to code backend"
            lessonTotal={17}/>
        </SwiperSlide>
        <SwiperSlide className="h-auto">
          <CourseRecommendedCard
            image="https://media.proglib.io/wp-uploads/2018/06/backend-dev-2018.jpg"
            category="Frontend"
            title="Learn to create frontend"
            lessonTotal={16}/>
        </SwiperSlide>
        <SwiperSlide className="h-auto">
          <CourseRecommendedCard
            image="https://www.kadrof.ru/sites/default/files/illustrations/backend.jpg"
            category="Design"
            title="Learn to design web applications"
            lessonTotal={13}/>
        </SwiperSlide>
        <SwiperSlide className="h-auto">
          <CourseRecommendedCard
            image="https://kinsta.com/wp-content/uploads/2021/09/front-end-developer-salary.jpg"
            category="Backend"
            title="Learn to code backend"
            lessonTotal={17}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CourseRecommended;