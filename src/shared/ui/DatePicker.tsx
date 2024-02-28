import { Popover, PopoverTrigger, PopoverContent } from '@/shared/shadcnUI/popover.tsx'
import { CalendarIcon } from '@radix-ui/react-icons'
import { Calendar } from '@/shared/shadcnUI/calendar.tsx'
import { format } from 'date-fns'
import { Button } from '@/shared/shadcnUI/button.tsx'
import React from 'react'
import { cn } from '@/shared/lib/utils.ts'


export function DatePicker() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover key={date?.getDate()}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn('flex h-10 w-full justify-start rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50', !date && 'text-muted-foreground')}

        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Дата рождения</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className=" w-auto p-0">
        <Calendar
          mode="single"
          captionLayout="dropdown-buttons"
          selected={date}
          onSelect={setDate}
          fromYear={1960}
          toYear={2030}
        />
      </PopoverContent>
    </Popover>
  )
}
