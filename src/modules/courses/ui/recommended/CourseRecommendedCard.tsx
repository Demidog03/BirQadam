import { Card } from '@/shared/shadcnUI/card';
import { FC, SetStateAction, useRef, useState } from 'react';
import { useUpdateEffect } from 'usehooks-ts';
import { hexToRGB } from '@/shared/lib/utils.ts';
// @ts-expect-error
import { ColorExtractor } from 'react-color-extractor';
import SkeletonContainer from '@/shared/lib/containers/SkeletonContainer.tsx';

interface CourseRecommendedCardProps {
  image: string
  category: string
  title: string
  lessonTotal: number
}

interface CardColors {
  title: string
  category: string
}

const CourseRecommendedCard: FC<CourseRecommendedCardProps> = ({ image, category, lessonTotal, title }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageColors, setImageColors] = useState<string[] | null>(null);
  const [cardColor, setCardColor] = useState<CardColors>({
    category: '',
    title: ''
  })

  const getColors = (detectedColorCodes: SetStateAction<null>) => {
    // @ts-expect-error
    setImageColors(detectedColorCodes);
  };

  useUpdateEffect(() => {
    if(imageColors) {
      setCardColor({
        category: hexToRGB(imageColors[0].slice(1), 0.5),
        title: hexToRGB(imageColors[0].slice(1), 0.5),
      })
    }
  }, [imageColors])

  return (
    <Card className="min-w-[285px] w-full rounded-[10px] p-[16px] h-full flex flex-col justify-between border-0">
      <div>
        <ColorExtractor getColors={getColors}>
          <img ref={imgRef} className="w-full rounded-[10px] h-[173px] object-cover" src={image} alt={title}/>
        </ColorExtractor>
        <div>
          <SkeletonContainer loading={!cardColor.category} skeletonClassname="my-2 h-5 w-[120px]">
            <h2 className="font-bold uppercase tracking-[1.12px] leading-[175%] mt-1" style={{ color: cardColor.category }}>{category}</h2>
          </SkeletonContainer>
          <SkeletonContainer loading={!cardColor.title} skeletonClassname="my-2 h-20 w-full">
            <h3 className="text-xl font-semibold leading-[140%] mb-2" style={{ color: cardColor.title }}>{title}</h3>
          </SkeletonContainer>
        </div>
      </div>
      <p className="text-[#5D7285] font-bold leading-[175%] flex items-center">
        <SkeletonContainer loading={!lessonTotal} skeletonClassname="my-2 h-4 w-[80px]">
          {lessonTotal} lessons
        </SkeletonContainer>
      </p>
    </Card>
  );
};

export default CourseRecommendedCard;