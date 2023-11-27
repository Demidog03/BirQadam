import { FC } from 'react';
interface SpinnerProps {
  color: string
}

const Spinner: FC<SpinnerProps> = ({ color }) => {
  return (
    <div className={`w-12 h-12 rounded-full animate-spin
                    border-2 border-solid ${color} border-t-transparent`}>
    </div>
  );
};

export default Spinner;