import { Input, message } from 'antd';
import { ChangeEvent, FC, ReactNode } from 'react'
import { convertFileToBase64, isFileTypeSupported } from '../lib/utils';

interface UploudProps {
  label: string
  image: string
  setImage: (image: string) => void
  leftContent?: ReactNode
}

const UploadImage: FC<UploudProps> = ({ label, image, setImage, leftContent }) => {
  const getImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      void message.error('Выберите файл для загрузки.');
      return;
    }

    if (!isFileTypeSupported(file.type, ['image/png', 'image/jpeg', 'image/gif'])) {
      void message.error('Только следующие форматы поддерживаются: PNG, JPEG, GIF');
      return;
    }

    convertFileToBase64(file, (result => {
      if ('error' in result) {
        void message.error(result.error);
      }
      else {
        setImage(result.image);
      }
    }))
  }

  return (
    <div className='w-full flex justify-between max-[545px]:flex-col'>
      <label 
        htmlFor="teamLogo" 
        className='max-h-[24px] text-[14px] ml-1 font-normal text-[#4F7596] cursor-pointer flex items-center'
      >
        <div className='w-[21px] h-[24px] flex items-center mr-1'>{leftContent}</div>
        <div>
          <span style={{ whiteSpace: 'nowrap' }} className='max-[510px]:text-[12px]'>{label}</span>
          <div className='w-full h-[2px] bg-[#4F7596]'></div>
        </div>
      </label>
      <Input
        style={{ width: 0, visibility: 'hidden' }}
        id='teamLogo'
        type='file'
        onChange={getImage}
        accept=".png,.jpg,.jpeg,.gif"
      />
      <div ><img src={image} className={'max-h-[116px] max-w-[168px] rounded-md '} /></div>
    </div>
  );
};

export default UploadImage;