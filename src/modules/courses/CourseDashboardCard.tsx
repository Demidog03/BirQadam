import { cloneElement, FC, ReactElement, ReactNode, useEffect, useState } from 'react';
import { HoverCard, HoverCardTrigger } from '@/shared/shadcnUI/hover-card.tsx';
import { BiSolidBookAlt, BiSolidCertification, BiSolidCheckSquare  } from 'react-icons/bi';

interface CourseDashboardCardProps {
  status: string
  amount: number
}

interface CourseDashboardStatusConfig {
  icon: ReactNode
  amountColor: string
  iconColor: string
}

const courseDashboardStatusConfig: Record<string, CourseDashboardStatusConfig> = {
  Ongoing: {
    icon: <BiSolidBookAlt />,
    amountColor: 'text-sky-900',
    iconColor: 'text-sky-500'
  },
  Completed: {
    icon: <BiSolidCheckSquare />,
    amountColor: 'text-emerald-900',
    iconColor: 'text-emerald-500'
  },
  Certificate: {
    icon: <BiSolidCertification />,
    amountColor: 'text-orange-900',
    iconColor: 'text-orange-500'
  }
}

const CourseDashboardCard: FC<CourseDashboardCardProps> = ({ amount, status }) => {
  const [config, setConfig] = useState<CourseDashboardStatusConfig>({
    icon: <BiSolidBookAlt />,
    amountColor: 'text-[#5D7285]',
    iconColor: 'text-[#5D7285]'
  })

  useEffect(() => {
    setConfig({
      icon: courseDashboardStatusConfig[status].icon,
      amountColor: courseDashboardStatusConfig[status].amountColor,
      iconColor: courseDashboardStatusConfig[status].iconColor
    })
  }, [status, amount])

  return (
    <HoverCard>
      <HoverCardTrigger asChild className="bg-white px-[25px] py-[27px] rounded-[10px] min-w-[200px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            {cloneElement(config.icon as ReactElement, {
              className: `${config.iconColor} text-[24px]`
            })}
            <h2 className="text-lg font-semibold text-[#5D7285]">{status}</h2>
          </div>
          <p className={`${config.amountColor} text-4xl leading-none font-bold`}>{amount}</p>
        </div>
      </HoverCardTrigger>
    </HoverCard>
  );
};

export default CourseDashboardCard;