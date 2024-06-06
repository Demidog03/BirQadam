import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/shared/lib/utils.ts';
import { forwardRef } from 'react';

interface ButtonVariantsInterface {
  normal: string;
  hover: string;
  disabled: string;
}

const defaultButtonVariants: ButtonVariantsInterface = {
  normal: 'text-white bg-[#1A8AE5]',
  hover: 'hover:bg-[#539AEE] hover:text-[#F7FAFC]',
  disabled: 'text-[#8D8D8D] bg-[#E7E7E7] cursor-not-allowed',
};

export interface ButtonPropsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  normalVariant?: string;
  hoverVariant?: string;
  disabledVariant?: string;
  asChild?: boolean;
}

const InputButton = forwardRef<HTMLButtonElement, ButtonPropsInterface>(
  ({ className, normalVariant, hoverVariant, disabledVariant, asChild = false, disabled = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    const disabledClass = disabled ? (disabledVariant || defaultButtonVariants.disabled) : '';
    const hoverClass = disabled ? disabledClass : (hoverVariant || defaultButtonVariants.hover);

    return (
      <Comp
        className={cn(
          'w-480 h-10 fixed top-70 left-45 px-16 rounded-xl font-public-sans font-semibold text-sm leading-[21px] tracking-[0.21px]',
          normalVariant || defaultButtonVariants.normal,
          hoverClass,
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);

InputButton.displayName = 'InputButton';

export { InputButton, defaultButtonVariants };