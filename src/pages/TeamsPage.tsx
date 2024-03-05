import { FC } from 'react';
import ContainerLayout from '@/shared/lib/layouts/ContainerLayout.tsx';
import { TeamsCards } from '@/modules/teams/ui/TeamsCards.tsx';

const TeamsPage: FC = () => {
  return (
    <ContainerLayout>
      <TeamsCards/>
    </ContainerLayout>
  );
};

export default TeamsPage;