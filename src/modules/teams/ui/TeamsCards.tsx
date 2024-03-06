import { useState } from 'react';
import { TeamCard } from './TeamCard';
import { Button } from 'antd';
import Modal from '@/shared/antDesign/modal';

export const TeamsCards = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const handleSubmit = () => {
    setOpen(false);
  }

  return (
    <div className='mx-auto'>

      <h1 className=' text-3xl font-black p-4'>
        One step-<span className=' font-bold'>команды</span>
      </h1>

      <div className='grid gap-x-2 gap-y-4 grid-cols-[repeat(auto-fill,_minmax(250px,_auto))] justify-items-center'>
        <TeamCard
          image="https://kinsta.com/wp-content/uploads/2021/09/front-end-developer-salary.jpg"
          category="Frontend"
          manager="Отеп Олжас"
          numberEmployees={13}
        />
        <TeamCard
          image="https://kinsta.com/wp-content/uploads/2021/09/front-end-developer-salary.jpg"
          category="Frontend"
          manager="Отеп Олжас"
          numberEmployees={13}
        />
        <TeamCard
          image="https://kinsta.com/wp-content/uploads/2021/09/front-end-developer-salary.jpg"
          category="Frontend"
          manager="Отеп Олжас"
          numberEmployees={13}
        />
        <TeamCard
          image="https://kinsta.com/wp-content/uploads/2021/09/front-end-developer-salary.jpg"
          category="Frontend"
          manager="Отеп Олжас"
          numberEmployees={13}
        />
        <TeamCard
          image="https://kinsta.com/wp-content/uploads/2021/09/front-end-developer-salary.jpg"
          category="Frontend"
          manager="Отеп Олжас"
          numberEmployees={13}
        />
        <TeamCard
          image="https://kinsta.com/wp-content/uploads/2021/09/front-end-developer-salary.jpg"
          category="Frontend"
          manager="Отеп Олжас"
          numberEmployees={13}
        />
        <div className="rounded-[10px] self-center border-spacing-1 border-gray-100 border-[1px] p-4 bg-white w-full">
          <Button className="w-full" type='link' onClick={showModal}>Создать команду</Button>
          <Modal 
            title='Создать команду' 
            open={open} 
            close={showModal} 
            submit={handleSubmit}
            submitButton='Создать'
          >
            Aaaa
          </Modal>
        </div>
      </div>

    </div>

  )
}