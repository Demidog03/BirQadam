import { FC } from 'react';
import { Input } from '@/shared/shadcnUI/input.tsx';
import { BsSearch } from 'react-icons/bs';

interface TSearchInputProps {
  placeholder: string
  className: string
}

const SearchInputWithIcon: FC<TSearchInputProps> = ({ placeholder, className }) => {
  return (
    <div className="flex items-center px-3">
      <BsSearch className="fill-[#4f7596]"/>
      <Input 
        placeholder={placeholder} 
        className={'text-[#4f7596] hover:border focus:before:border-0' + className}
      />
    </div>
  );
};

export default SearchInputWithIcon;