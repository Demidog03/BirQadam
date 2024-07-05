import React, { FC } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import ManagerEmployeesList from '@/modules/employees/ui/ManagerEmployeesList.tsx';
import EmployeesList from '@/modules/employees/ui/EmployeesList';

const { Search } = Input;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 24px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #0d141c;
  font-weight: 900;
  padding: 16px;
  
  @media (max-width: 430px) {
    font-size: 2rem;
  }
`;

const SearchContainer = styled.div`
  margin-left: 8px;
`;

const ListsContainer = styled.div`
  width: 100%;
  margin-left: 20px;
`;

const EmployeesPage: FC = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Title>Все сотрудники</Title>
        <SearchContainer>
          <Search placeholder="Search employees" />
        </SearchContainer>
        <ListsContainer>
          <ManagerEmployeesList />
          <EmployeesList />
        </ListsContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default EmployeesPage;