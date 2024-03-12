import { FC } from 'react';
import { Card } from '@/shared/shadcnUI/card.tsx';
import { Button } from '@/shared/shadcnUI/button.tsx';
interface LearningPathItem {
    status: string;
    id: number;
    title: string;
    instructor: string;
    url: string;
}

interface MyLearningPathInterface {
    learningPathData: LearningPathItem[];
}
const MyLearningPathTab: FC<MyLearningPathInterface> =({ learningPathData }) => {
  return (
    <div className="w-full">
      <h1 className='pt-4 font-public-sans font-bold text-xl leading-27.5 tracking-wide text-black'>Your Learning Path</h1>
      {learningPathData.map(({ status, title, instructor, url , id }) => (
        <Card key={id} className="flex w-full py-4 border-0 shadow-none rounded-none">
          <div className="flex items-center w-1/2">
            <img className="min-w-[455.86px] max-w-[455.86px] min-h-[256.41px] max-h-[256.41px] rounded-[20px] object-cover" src={url} alt={title} />
          </div>
          <div className="flex flex-col w-1/2 px-6">
            <p className="font-public-sans font-normal text-14 leading-21 text-[#4F7596]">Status: {status}</p>
            <p className="font-public-sans font-bold text-18 leading-22.5 tracking-wide text-black">{title}</p>
            <p className="font-public-sans font-normal text-14 leading-21 text-[#4F7596]">{instructor}</p>
          </div>
          <div className="flex items-center ml-auto">
            <Button className="px-4 py-2 bg-[#1A8AE5] text-white rounded-xl hover:text-white">
              {status === 'In Progress' ? 'Continue' : 'View Certificate'}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MyLearningPathTab;