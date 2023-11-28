import { FC, useState } from 'react';
import { Input } from '@/shared/shadcnUI/input.tsx';
import { BiHide, BiShowAlt } from 'react-icons/bi';

interface PasswordInputProps {
  className?: string
  id: string
  handleChange: (params: never) => void
  value: string
}

const PasswordInput: FC<PasswordInputProps> = ({ className = '', id, handleChange, value }) => {
  const [isHidden, setIsHidden] = useState<boolean>(true)

  return (
    <div className="relative">
      <Input
        className={'pr-8' + ' ' + className}
        id={id}
        type={isHidden ? 'password' : 'text'}
        onChange={handleChange}
        value={value}
      />
      {
        isHidden
          ? <BiHide className="cursor-pointer absolute right-2 top-[50%] translate-y-[-50%] text-lg" onClick={setIsHidden.bind(null, false)}/>
          : <BiShowAlt className="cursor-pointer absolute right-2 top-[50%] translate-y-[-50%] text-lg" onClick={setIsHidden.bind(null, true)}/>
      }
    </div>
  );
};

export default PasswordInput;