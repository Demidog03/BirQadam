import { FC } from 'react';
import Spinner from '@/shared/ui/Spinner.tsx';

const BackdropLoading: FC<{ loading: boolean }> = ({ loading }) => {
  if (loading) {
    return (
      <div className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-sky-100/5 backdrop-blur-[2px]">
        <Spinner color="border-sky-700"/>
      </div>
    )
  }
};

export default BackdropLoading;