import { FC } from 'react';
import MyLearningPathTab from '@/modules/employees/ui/profile/MyLearningPathTab.tsx';
import styled from 'styled-components';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { COLORS, FONTS } from '@/shared/lib/constants.ts';

const learningPathData = [
  {
    'status': 'In Progress',
    'id': 1,
    'title': 'Fundamentals of Design Thinking',
    'instructor': 'Instructor:Cristian White',
    'url': 'https://s3-alpha-sig.figma.com/img/c9b5/6c79/9b021bfbc30f413de211098d3b0fd85e?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D4cXNML8Ke2FbMJvc0pacXu7U1K8o5QIzGEP4Hw5l~OhUNC3aPOYRDSTMy8DM~58CdeE7lJtFQLTztjW2-ZbMMu2~1Ds57DhkwPP15iI1vKqefvwNTYyAudLEIo8RZSUgD6xNYr-J55lb2MkjfUWE~yUbdLo2tOVKO7PhcsvpazEyGRGKkvIAL7KpqKOBbf3TlYFz1NKH7tVeRp5EB~DbZ6Wxg83loQOWirNaKhCupVo7wiO3VTQGqyRfu2V0osLD6YccqOuBDU8x1ZgbdqUdOzJJkAk4SKU7gZsz2NPZuEkBOeUh9NCfKPZT3dh01U3lknJYZ3JoGL6axyQWGXWsQ__',
  },
  {
    'status': 'In Progress',
    'id': 2,
    'title': 'Introduction to Product Management',
    'instructor': 'Instructor:Robert Black',
    'url': 'https://s3-alpha-sig.figma.com/img/a22e/3c6e/15be692a950abbb41fc412d12d9a4e25?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XD2xyeawFq6pCccddzxR0F00ghWMCTcjQTrCehzlMGgH89hIUz5ufTAOGECQwtHnauMLq-zpeKYU~0FYgiNi-UYs1CuK73BOnpyrH0vOdR1EhLuruEFbWearXNjBP0LGJJNayoUhznaC29gTdh18K-I3xldimxTHlQOfmoJKGY40Crs8k2FmrP3ncc143awKIIlb7MIDvXrNGzW0FzokRWOfHwRjqRN4iBZMFob0fBlInkEiJCnZcwmREZhfPN~I6WDJNMV0fO6IfiVzqTdOI5ZMl1w5WgBgWpGcmb~nLAuhoQGKKiGB7OGsyTGav9l3uT1tFDt~HzgEPLv5TcRj1A__',
  },
  {
    'status': 'Completed',
    'id': 3,
    'title': 'User Research Methods',
    'instructor': 'Instructor:Anaken Skywalker',
    'url': 'https://s3-alpha-sig.figma.com/img/7a6d/5233/c01840a9e2e61499fcd06a7daf9fa3ff?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f3l7N5jnh0A6fbmhUiYqFBvwjXcCpA7yA5VXTS-mNyxrCJjfiEBp3fGiqFtartJutW8NidWzlCQ~3LV-G6SPcFESIzNZ0BMrcat6tazJ8nbDnC9LyjlGJQ7AaHu2n4CCANARFQxa8ZyTJDJFIjTRCmVL8idxDb6RhnHjkzWHTdC1u9DdOeZy77EP71bDy60Ya5hsJme4wTP36xwVReme8ukiPyELmX4Z6uXXhURwhaUvlYM0LNcY-6fj9qoclKcRCzbgsRW45wPpNbSGs8xO5DY8-ieJE2vjbCEuVCwEUdeX74Znynv~HZJd9MtWcSCErpP59scjCwhEBztszV8JYg__',
  },
  {
    'status': 'Completed',
    'id': 4,
    'title': 'Wireframing and Prototyping',
    'instructor': 'Instructor:Maise Windu',
    'url': 'https://s3-alpha-sig.figma.com/img/e4a6/db3b/7bb868edcce87e8b749556d4846ae48a?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JGSXKRFmm-9Q2JksD2mamS~bItYyQHAK-9NJvi67qjY38YcUitmIOPOtzg89cP-dNEOGmhOFkHSGqoTta6hV1OdWCyqjSw2Gp7RmFMl3aBXgFrHKgmMXzZpTixCuZ5y-F~GAGc0iB0v8IeexnLaxijxhEMEi4-RHT3QXufgQttVBfI5u4HqcJkDgeMy3x8WRHIjPrqFCrdxl8D0V7ti~aAVoCqi3zWboxoConNuN3MDEg4MRL71cXXO9ZN1FrfX3Ct~1cDexP5k9SqGvEMfO0mZJMoTlVURGpZciCmiv6HlUW06Jl9PXh4y-Kh2MalJM2bGRo-hleA5k54VKSDjXGg__',
  },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledTabs = styled(Tabs)`
    min-width: 100%;
    background-color: transparent;
    .ant-tabs-nav {
        background-color: transparent;
        border-bottom: none;
    }
    
    .ant-tabs-nav-list{
        width: 100%;
        justify-content: space-between;
    }

    .ant-tabs-tab {
        width: 100%;
        justify-content: center;
        border-bottom: none;
        .ant-tabs-tab-btn {
            font-family: ${FONTS.MAINFONTFAMILY};
            font-weight: 700;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 0.21px;
            color: ${COLORS.PRIMARY[4]};
        }
        &.ant-tabs-tab-active {
            border-bottom: 4px solid blue 400;
            .ant-tabs-tab-btn {
                color: #0D141C;
            }
        }
    }
`;

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'My Learning Path',
    children: <MyLearningPathTab learningPathData={learningPathData}/>,
  },
  {
    key: '2',
    label: 'Courses',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Quizzes',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Projects',
    children: 'Content of Tab Pane 3',
  },
];

const EmployeeProfileTabs: FC = () =>
  <Container>
    <StyledTabs defaultActiveKey="1">
      {items.map(item => (
        <Tabs.TabPane key={item.key} tab={item.label}>
          {item.children}
        </Tabs.TabPane>
      ))}
    </StyledTabs>
  </Container>

export default EmployeeProfileTabs;