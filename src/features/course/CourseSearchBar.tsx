import { FC } from 'react';
import SearchInput from '@/shared/ui/SearchInput.tsx';

export const CourseSearchBar: FC = () => {
  return (
    <SearchInput
      className="max-w-[350px] rounded-[10px] focus:border-sky-700 focus:text-slate-900 placeholder:focus:text-sky-700 text-sm font-medium"
      placeholder="Search for courses"
    />
  );
};