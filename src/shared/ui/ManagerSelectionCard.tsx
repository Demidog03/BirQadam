import { Button } from '../shadcnUI/button';

export interface ManagerSelectionCardProps {
  name: string;
  profession?: string;
  avatar: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonStyle?: string;
  buttonText?: string;
}
//'w-[18.6%] max-w-[96px]'
export const ManagerSelectionCard = (props: ManagerSelectionCardProps) => {
  return (
    <div className='flex justify-center '>
      <div className='flex justify-between items-stretch w-[100%] mb-[26px]'>
        <div className='h-[56px] w-[56px]'>
          <img
            src={props.avatar}
            alt='Avatar'
            width='56px'
            height='56'
            className='rounded-full'
          />
        </div>
        <div className='w-[100%] flex flex-col items-start ml-[10px]'>
          <h3 className='text-base font-medium'>{props.name}</h3>
          <p className='text-sm text-[#4F7596]'>{props.profession}</p>
        </div>
        <Button
          variant='secondary'
          className={props.buttonStyle}
          onClick={props.handleClick}
        >
          {props.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ManagerSelectionCard;
