import React from 'react';

export interface IBaseButtonProps {
  onClick: Function;
  className?: string;
}

export const BaseButton: React.FC<IBaseButtonProps> = ({ className, children, onClick }) => {

  const handleClick = (e: any) => {
    if (onClick) {
      onClick(e);
    }
  }

  return (
    <button className={className} onClick={handleClick}>{children}</button>
  );
}