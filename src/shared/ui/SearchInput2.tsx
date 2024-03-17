
import { Input } from 'antd';
import { Flex } from 'antd/lib';
import { SearchIcon } from 'lucide-react';


export const SearchInput2 = () =>{

  return (
    <Flex justify='center' style={{ width: '100%' }}>
      <Flex align='center' style={{ backgroundColor: '#E8EDF2', borderRadius:'6px', width: '100%', marginLeft: '16px' }}>
        <SearchIcon  style={{ marginRight: '-20px', zIndex: 1, height:'16px', width: '16px', color: '#4F7596' }}/>
        <Input
          style={{ paddingLeft: '22px' }}
          className="placeholder:text-[#4f7596] border-none bg-[#E8EDF2] text-[16px]"
          id="username"
          placeholder="Поиск по именам, почте и команде"
          type='search' />
      </Flex>
    </Flex>

  );
}


export default   SearchInput2