import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        clsx(
          'font-medium px-5 py-2.5 rounded-lg flex items-center gap-1 shadow-sm border text-center justify-center text-white disabled:opacity-50 w-full sm:w-auto transition-colors',
          {
            'bg-accent-500 border-accent-500 hover:bg-accent-500/90 hover:text-white':
              variant === 'primary',
            'bg-primary-700 border-primary-600 hover:bg-primary-700/90 hover:text-white':
              variant === 'secondary',
            'bg-red-500 border-red-500 hover:bg-red-500/90 hover:text-white':
              variant === 'danger',
          }
        ),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
