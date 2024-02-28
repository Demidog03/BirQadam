import { TeamCard } from './TeamCard';


export const TeamsCards = () => {
  return (
    <div className='mx-auto max-w-5xl'>

      <h1 className=' text-3xl font-black p-4'>
        One step-<span className=' font-bold'>команды</span>
      </h1>

      <div className='grid gap-x-32 gap-y-4 grid-cols-3 max-lg:grid-cols-2 max-sm:block  justify-items-center'>
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
      </div>

    </div>

  )
}