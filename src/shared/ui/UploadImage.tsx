import Input from 'antd/es/input/Input';
import { ChangeEvent, FC, ReactNode } from 'react'
import { convertFileToBase64, isFileTypeSupported } from '../lib/utils';
import { toast } from '../shadcnUI/use-toast';

interface UploudProps {
  label: string
  value: string
  image: string
  setImage: (image: string) => void
  leftContent?: ReactNode
  className?: string
}

const UploadImage: FC<UploudProps> = ({ label, value, image, setImage, leftContent, className }) => {
  const getImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      toast({
        variant: 'destructive',
        description: 'Выберите файл для загрузки.',
      });
      return;
    }

    if (!isFileTypeSupported(file.type, ['image/png', 'image/jpeg', 'image/gif'])) {
      toast({
        variant: 'destructive',
        description:
          'Только следующие форматы поддерживаются: PNG, JPEG, GIF',
      });
      return;
    }

    convertFileToBase64(file, (result => {
      if ('error' in result) {
        toast({
          variant: 'destructive',
          description: result.error,
        });
      }
      else {
        setImage(result.image);
      }
    }))
  }

  return (
    <div className='w-full flex justify-between max-[400px]:flex-col'>
      <label 
        htmlFor="teamLogo" 
        className='max-h-[24px] text-[14px] ml-1 font-normal text-[#4F7596] cursor-pointer flex items-center'
      >
        <div className='w-[21px] h-[24px] flex items-center mr-1'>{leftContent}</div>
        <div>
          <span className='max-[510px]:text-[12px]'>{label}</span>
          <div className='w-full h-[2px] bg-[#4F7596]'></div>
        </div>
      </label>
      <Input
        id='teamLogo'
        className='border-0 hidden'
        type='file'
        onChange={getImage}
        value={value}
        accept=".png,.jpg,.jpeg,.gif"
      />
      <div className='max-[400px]:mt-4'><img src={image} className={'max-h-[116px] max-w-[168px] rounded-md ' + className} /></div>
    </div>
  );
};

export default UploadImage;