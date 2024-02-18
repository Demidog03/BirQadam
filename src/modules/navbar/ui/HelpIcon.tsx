import { FC } from 'react';
import { RiQuestionLine } from 'react-icons/ri';

const HelpIcon: FC = () => {
  return (
    <div className="cursor-pointer mx-2">
      <RiQuestionLine className="w-[20px] h-[20px]" />
    </div>
  );
};

export default HelpIcon;
