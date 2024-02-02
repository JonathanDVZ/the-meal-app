import React from 'react';
import Button from 'react-bootstrap/Button';

export interface IButtonWithIcon extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconComponent: React.ReactNode;
}

const ButtonWithIcon: React.FC<IButtonWithIcon> = (props) => {
  const propsWithoutIcon = { ...props };
  delete propsWithoutIcon.iconComponent;
  delete propsWithoutIcon.className;

  return (
    <Button {...propsWithoutIcon} className={props.className}>
      {props.iconComponent}
    </Button>
  );
};

export default ButtonWithIcon;
