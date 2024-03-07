import { TeamCard } from './TeamCard';
import TeamCreate from './TeamCreate';

export const TeamsCards = () => {
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
        <TeamCreate/>
      </div>

    </div>

  )
}