import { FC, ReactNode } from 'react'
import { Input } from '@/shared/shadcnUI/input.tsx';

interface TSearchBarProps {
  placeholder: string
  className?: string
  leftContent?: ReactNode
}

const SearchInput: FC<TSearchBarProps> = ({ placeholder, className, leftContent }) => {
  return (
    <div className="relative">
      <div className="absolute left-2 top-[calc(50%+1.5px)] translate-y-[-50%] flex items-center text-[#4F7596]">{leftContent}</div>
      <Input
        placeholder={placeholder}
        className={'px-10 py-3 bg-[#E8EDF2] text-[#4F7596] text-[16px] leading-6 placeholder:text-[#4F7596] hover:border focus:before:border-0 ' + className}
      />
    </div>
  );
};

export default SearchInput;
