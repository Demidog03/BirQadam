import { useSelector } from '@/store';
import { TeamCard } from './TeamCard';
import TeamCreate from './TeamCreate';
import { fetchTeamsAction, teamsSelector } from '../model/teams.slice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const TeamsCards = () => {
  const teams = useSelector(teamsSelector)
  const isLoading = useSelector(state => state.teams.loading[0]?.isLoading)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTeamsAction());
  }, [dispatch])

  if (isLoading) {
    return <h3>Loading...</h3>; 
  }
  
  return (
    <div className='mx-auto'>

      <h1 className=' text-3xl font-black p-4'>
        One step-<span className=' font-bold'>команды</span>
      </h1>

      <div className='grid gap-x-2 gap-y-4 grid-cols-[repeat(auto-fill,_minmax(250px,_auto))] justify-items-center'>
        {/* <TeamCard
          image="https://kinsta.com/wp-content/uploads/2021/09/front-end-developer-salary.jpg"
          category="Frontend"
          manager="Отеп Олжас"
          numberEmployees={13}
        />*/}
        {teams.map(team => (
          <TeamCard 
            key={team.id}
            image={team.logo || `https://kinsta.com/wp-content/uploads/2021/09/front-end-developer-salary.jpg`}
            category={team.name}
            manager={team.name}
            numberEmployees={team.company.employeeNumbers}
          />
        ))}
        <TeamCreate/>
      </div>

    </div>

  )
}