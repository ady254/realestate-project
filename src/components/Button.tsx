import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-yellow-400 text-gray-900 hover:bg-yellow-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
