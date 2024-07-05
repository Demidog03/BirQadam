import { FC } from 'react'; 
import { getAltFromImageSrc } from '@/shared/lib/utils.ts'; 
import { Card, Typography  } from 'antd'; 
 
interface TeamCardProps { 
  image: string 
  category: string 
  manager: string 
  numberEmployees: number 
} 
 
export const TeamCard: FC<TeamCardProps> = ({ image, category, manager, numberEmployees, }) => { 
  return ( 
    <Card hoverable cover={image && <img alt={getAltFromImageSrc(image)} src={image} />}> 
      <Card.Meta  
        title={category} 
        description={(
          <>
            <div>Менеджер: <Typography.Text strong>{manager}</Typography.Text></div>
            <div>Кол-во сотрудников: <Typography.Link strong>{numberEmployees}</Typography.Link></div>
          </>
        )}
      /> 
    </Card> 
  ); 
}