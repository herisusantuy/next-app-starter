import { MouseEvent, ReactNode } from 'react';

import styles from './styles.module.scss';

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
  onClick,
  title,
  size = 'lg',
  type = 'button',
  variant,
  disabled
}: ButtonProps) => {
  const getButtonClass = () => {
    const classList = [styles.btn];
    return classList.join(' ');
  };
  return (
    <button
      className={getButtonClass()}
      type={type}
      onClick={onClick}
      title={title}
      aria-label={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
