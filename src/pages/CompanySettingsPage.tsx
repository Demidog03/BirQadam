import SearchInput2 from '@/shared/ui/SearchInput2';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/shadcnUI/dialog';
import ManagerSelectionCard from '@/shared/ui/ManagerSelectionCard';
import { Input } from '@/shared/shadcnUI/input';
import { Label } from '@/shared/shadcnUI/label';
import { ChangeEvent, useState } from 'react';

import { Button } from '@/shared/shadcnUI/button';
import BackdropLoading from '@/shared/ui/BackdropLoading';
import { useSelector } from '@/store';
import { authLoadingSelector } from '@/modules/auth/model/auth.slice';
import { IoPersonAddSharp } from 'react-icons/io5';

const onlick = () => {
  console.log('dwws');
};

const mockData = [
  {
    data: [
      'WWSfjgghg',
      'dwadawdwqdqwdgh4545h32',
      'https://github.com/shadcn.png',
    ],
    my: onlick,
  },
  {
    data: [
      'WWSfjgghg',
      'dwadawdwqdqwdgh4545h32',
      'https://github.com/shadcn.png',
    ],
    my: onlick,
  },
  {
    data: [
      'WWSfjgghg',
      'dwadawdwqdqwdgh4545h32',
      'https://github.com/shadcn.png',
    ],
    my: onlick,
    buttonStyle: 'w-[18.6%] max-w-[96px]',
    buttonText: 'Ghbdtn',
  },
  {
    data: [
      'WWSfjgghg',
      'dwadawdwqdqwdgh4545h32',
      'https://github.com/shadcn.png',
    ],
    my: onlick,
  },
];

export const CompanySettingsPage = () => {
  const [image, setImage] = useState('https://github.com/shadcn.png');
  const loading = useSelector(authLoadingSelector);

  const fileHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFileList = e.target.files as FileList;
    const imagefile = imageFileList[0];
    const reader = new FileReader();
    reader.readAsDataURL(imagefile);
    reader.onload = () => {
      const result = reader.result as string;
      setImage(result);
    };
  };

  return (
    <>
      <div className='flex  justify-center items-center'>
        <div className='flex flex-col w-full min-h-screen h-full py-[50px] justify-center items-center gap-10 max-w-[34rem]'>
          <div className='flex w-[100%] text-[32px]'>
            <h1 className='slite-950 font-bold text-left text-[32px]/[40px]'>
              Настройки компании
            </h1>
          </div>
          <div className='flex w-[100%] justify-start items-center'>
            <div>
              <img src={image} className=' max-h-[70px] max-w-[75px] ' />
            </div>
            <div className='space-y-1 '>
              <Label
                className=' cursor-pointer text-[16px] text-[#0D141C] ml-[16px] font-medium'
                htmlFor='companyLogo'
              >
                Сменить логотип
              </Label>
              <Input
                id='companyLogo'
                className='border-0 hidden'
                type='file'
                onChange={fileHandleChange}
                accept='.png,.jpg,.jpeg,.gif'
              />
            </div>
          </div>
          <div className='w-[100%] border-0 flex flex-col'>
            <div className='space-y-1 mb-[10px]'>
              <Input
                id='companyName'
                defaultValue={'OneStep'}
                className=' h-[56px] text-base'
              />
            </div>

            <div>
              <h4 className='font-semibold leading-6 mb-[12px]'>
                Менеджер компании
              </h4>
              <div className='flex justify-center flex-col '>
                {mockData.map((info, i) => {
                  return (
                    <ManagerSelectionCard
                      name={info.data[0]}
                      avatar={info.data[2]}
                      handleClick={info.my}
                      key={i}
                      buttonStyle={info.buttonStyle}
                      buttonText={info.buttonText}
                    />
                  );
                })}
              </div>
              <Dialog>
                <DialogTrigger className='flex items-center bg-[#E8EDF2] w-[236px] leading-5 rounded-xl h-[40px]'>
                  <div className='w-[100%] flex items-center pl-[15px]'>
                    <IoPersonAddSharp />

                    <p className='font-bold ml-[8px]'> Назначить менеджера</p>
                  </div>
                </DialogTrigger>
                <DialogContent className='min-w-[66%] px-[10px] pb-[0px]'>
                  <DialogHeader className='text-[24px]'>
                    <DialogTitle className=' ml-[26px] mb-[20px] text-[24px] leading-6 text-left mt-[12px]'>
                      Выбрать менеджера
                    </DialogTitle>
                    <SearchInput2 />
                  </DialogHeader>
                  <div>
                    <div className='flex justify-center flex-col px-[30px]'>
                      {mockData.map((info, i) => {
                        if (i > 2) return;
                        return (
                          <ManagerSelectionCard
                            name={info.data[0]}
                            profession={info.data[1]}
                            avatar={info.data[2]}
                            handleClick={info.my}
                            key={i}
                            buttonStyle={info.buttonStyle}
                            buttonText={info.buttonText}
                          />
                        );
                      })}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className='flex justify-end mt-[12px]'>
              <Button
                type='button'
                className='hover:bg-[#C0C0C0] mr-[10px] rounded-xl'
                variant='secondary'
              >
                Отменить
              </Button>
              <Button
                type='button'
                className=' bg-[#1A8AE5] hover:bg-[#0369A1] rounded-xl'
              >
                Сохранить
              </Button>
            </div>
          </div>
          <BackdropLoading loading={loading} />
        </div>
      </div>
    </>
  );
};

export default CompanySettingsPage;
