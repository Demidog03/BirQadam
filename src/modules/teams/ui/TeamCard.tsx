import { FC } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/shared/shadcnUI/card';


interface TeamCardProps {
  image: string
  category: string
  manager: string
  numberEmployees: number
}

export const TeamCard: FC<TeamCardProps> = ({ image, category, manager, numberEmployees, }) => {

  const textAlt = () => {
    const text = image.split('/')
    return text[text.length - 1].slice(0, text[text.length - 1].indexOf('.'))
  }

  return (
    <Card className="rounded-[10px] h-full flex flex-col justify-between border-spacing-1">
      <CardHeader className='p-0'>
        <img src={image} alt={textAlt()} className='rounded-t-lg' />
      </CardHeader>
      <CardContent className=' p-4'>
        <CardTitle className=' text-base font-bold'>{category}</CardTitle>
        <CardDescription>Менеджер: <span className='font-bold'>{manager}</span> </CardDescription>
        <CardDescription>Кол-во сотрудников: <span className=' text-sky-600 font-bold'>{numberEmployees}</span> </CardDescription>
      </CardContent>
    </Card>
  );

}