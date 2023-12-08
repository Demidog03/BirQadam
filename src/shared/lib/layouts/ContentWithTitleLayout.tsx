import { FC, ReactNode } from 'react';

const ContentWithTitleLayout: FC<{ className?: string, title: string, children: ReactNode }> = ({ className = '', title, children }) => {
  return (
    <div className={'flex flex-col gap-[22px] pb-10' + ' ' + className}>
      <h2 className="ml-4 text-2xl font-semibold text-[#5D7285]">{title}</h2>
      {children}
    </div>
  );
};

export default ContentWithTitleLayout;