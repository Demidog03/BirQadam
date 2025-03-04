import { FC, ReactNode } from 'react';


const ContainerLayout: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <div className="py-[40px] px-6 overflow-y-auto">
      {children}
    </div>
  );
};

export default ContainerLayout;