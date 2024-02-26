import { FC, useState } from 'react';
import { Input } from '@/shared/shadcnUI/input.tsx';
import { Button } from '@/shared/shadcnUI/button.tsx';
import { useDispatch } from 'react-redux';
import { useSelector } from '@/store';
import { authLoadingSelector, authTempUserIdSelector, sendCode } from '@/modules/auth/model/auth.slice.ts';
import BackdropLoading from '@/shared/ui/BackdropLoading.tsx';

const ConfirmCodeForm: FC = () => {
  const [code, setCode] = useState<string>('')
  const dispatch = useDispatch()
  const userId = useSelector(authTempUserIdSelector)
  const loading = useSelector(authLoadingSelector(sendCode.type))
  
  const handleSendCode = () => {
    if(userId && code) {
      dispatch(sendCode({
        code,
        userId
      }))
    }
  }
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Введите код отправленный на ваш email</h1>
      <Input
        id="code"
        onChange={(e) => {setCode(e.target.value)}}
        value={code}
        placeholder="Код"
        className='bg-white bg-opacity-10 placeholder:text-[#4F7596] px-4 py-3 text-[16px] rounded-xl'
      />
      <Button onClick={handleSendCode} className="bg-[#1A8AE5] font-bold text-[14px] text-white rounded-xl hover:bg-[#3e9cea]">Отправить</Button>
      <BackdropLoading loading={loading}/>
    </div>
  );
};

export default ConfirmCodeForm;