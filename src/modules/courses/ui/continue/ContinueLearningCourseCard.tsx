import { FC, SetStateAction, useRef, useState } from 'react';
import { Card } from '@/shared/shadcnUI/card.tsx';
import { Progress } from '@/shared/shadcnUI/progress';
import { useUpdateEffect } from 'usehooks-ts';
import { hexToRGB } from '@/shared/lib/utils.ts';
// @ts-expect-error
import { ColorExtractor } from 'react-color-extractor';

interface ContinueLearningCourseCardProps {
  imageSrc: string
  category: string
  title: string
  totalLessons: number
  currentLessons: number
}

interface CardColors {
  title: string
  category: string
}

const ContinueLearningCourseCard: FC<ContinueLearningCourseCardProps> = ({ currentLessons, totalLessons, category, imageSrc, title }) => {
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
    <Card className="flex gap-4 items-center w-[351px] p-[20px] border-0 shadow-none">
      <ColorExtractor getColors={getColors}>
        <img ref={imgRef} className="w-[90px] h-[82px] rounded-[10px] object-cover" src={imageSrc} alt={imageSrc}/>
      </ColorExtractor>
      <div className="flex flex-col justify-between">
        <p className="text-[10px] uppercase tracking-[0.7px] font-bold" style={{ color: cardColor.category }}>{category}</p>
        <h2 className="font-semibold" style={{ color: cardColor.title }}>{title}</h2>
        <div className="flex justify-between">
          <p className="font-semibold text-[#5D7285]">{currentLessons}/{totalLessons} lessons</p>
          <p className="text-teal-500 font-semibold">{currentLessons/totalLessons * 100}%</p>
        </div>
        <Progress value={currentLessons/totalLessons * 100} className="w-full h-[6px] text-teal-500 [&_.bg-primary]:bg-teal-500" />
      </div>
    </Card>
  );
};

export default ContinueLearningCourseCard;