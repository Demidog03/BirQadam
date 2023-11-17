import { ComponentType, Suspense } from 'react';
import Loading from '@/shared/ui/Loading.tsx';

const Loadable = (Component: ComponentType) => (props: Record<never, never>) => {
  return (
    <Suspense fallback={<Loading loading={true}/>}>
      <Component {...props}/>
    </Suspense>
  )
}

export default Loadable
