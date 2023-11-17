import { FC, useEffect, useState } from 'react';

interface DotsLoaderProps {
  color: string,
  size?: 'large' | 'medium' | 'small'
}
interface TDotSize {
  height: string,
  width: string
}

const DotsLoader: FC<DotsLoaderProps> = ({ color, size = 'medium' }) => {
  const [dotSize, setDotSize] = useState<TDotSize>()
  useEffect(() => {
    switch (size) {
    case 'large':
      setDotSize({ height: 'h-8', width: 'w-8' })
      break;
    case 'medium':
      setDotSize({ height: 'h-5', width: 'w-5' })
      break;
    case 'small':
      setDotSize({ height: 'h-2', width: 'w-2' })
      break;
    default:
      setDotSize({ height: 'h-5', width: 'w-5' })
      break;
    }
  }, [size])

  return (
    <div className='flex space-x-2 justify-center items-center bg-white dark:invert'>
      <span className='sr-only'>Loading...</span>
      <div className={`${dotSize?.height} ${dotSize?.width} ${color} rounded-full animate-bounce [animation-delay:-0.3s]`}></div>
      <div className={`${dotSize?.height} ${dotSize?.width} ${color} rounded-full animate-bounce [animation-delay:-0.15s]`}></div>
      <div className={`${dotSize?.height} ${dotSize?.width} ${color} rounded-full animate-bounce`}></div>
    </div>
  );
};

export default DotsLoader;