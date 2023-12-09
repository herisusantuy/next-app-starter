import { MouseEvent, ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  title: string;
  size?: 'sm' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'icon'
    | 'dropdown'
    | 'link'
    | 'clear';
  disabled?: boolean;
};

const Button = ({
  children,
  className,
  title,
  size = 'lg',
  type = 'button',
  variant,
  disabled
}: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
