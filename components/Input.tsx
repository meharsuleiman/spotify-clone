import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, placeholder, ...props }, ref) => {
    return (
      <input
        ref={ref}
        disabled={disabled}
        type={type}
        className={twMerge(
          `flex w-full rounded-md bg-neutral-700 border border-transparent px-3 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none`,
          className
        )}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;