import { Input } from '@/shared/shadcnUI/input';
import { SearchIcon } from 'lucide-react';


export const SearchInput2 = () =>{

  return (
    <div className='w-[100%], flex justify-center'>
      <div className='flex items-center rounded-md border border-input bg-[#E8EDF2] pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring w-[98%]'>
        <SearchIcon className="h-[16px] w-[16px] text-[#4F7596]" />
        <Input
          className="placeholder:text-[#4f7596] border-none bg-[#E8EDF2] text-[16px]"
          id="username"
          placeholder="Поиск по именам, почте и команде"
          type='search' />

      </div>
    </div>
  );
}


export default   SearchInput2