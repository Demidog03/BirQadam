import { FC } from 'react';
import { Input } from '@/shared/shadcnUI/input.tsx';

interface TSearchBarProps {
  placeholder: string
  className: string
}

const SearchInput: FC<TSearchBarProps> = ({ placeholder, className }) => {
  return (
    <Input placeholder={placeholder} className={'hover:border focus:before:border-0 ' + className}/>
  );
};

export default SearchInput;