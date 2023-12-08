import { FC, ReactNode } from 'react';
import { Skeleton } from '@/shared/shadcnUI/skeleton.tsx';

interface SkeletonContainerProps {
  loading: boolean
  skeletonClassname?: string
  children: ReactNode
}

const SkeletonContainer: FC<SkeletonContainerProps> = ({ loading, skeletonClassname, children }) => {
  if (loading) {
    return (
      <Skeleton className={skeletonClassname || 'h-4 my-2 w-full'}/>
    )
  }
  return children
};

export default SkeletonContainer;