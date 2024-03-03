import * as React from 'react';
import { cn } from '@/shared/lib/utils.ts';
import { forwardRef, useState } from 'react'; // Импортируем useState

export interface InputPropsInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputPropsInterface>(
  ({ className, type, placeholder, error, disabled, ...props }, ref) => {
    const [value, setValue] = useState('');
    const hasError = Boolean(error);

    return (
      <div className="relative w-96">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => { setValue(e.target.value) }}
          className={cn(
            'w-full h-10 rounded-xl border p-3 bg-[#F7FAFC] focus:outline-none font-public-sans font-normal text-sm leading-[24px] text-[#4F7596] placeholder-[#4F7596]',
            {
              'border-[#4F7596]': !hasError,
              'border-red-500': hasError,
              'bg-[#E8EDF2] border-none': disabled && value,
              'border-[#D1DBE8]': disabled && !value,
            },
            className
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        {hasError && (
          <div className="absolute right-0 top-full text-[#B01C1C] text-xs leading-[21px] mt-1 font-public-sans font-normal">
            {error}
          </div>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export { InputField };