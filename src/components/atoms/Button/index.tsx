import React from 'react';
import Props from './interfaces';
import { CustomButton } from './styles';

const Button = ({
  children,
  margin = 'none',
  padding = 'auto',
  fontSize = 'medium',
  color = 'black',
  backgroundColor = 'green',
  width = 'auto',
  borderRadius = 'medium',
  disabled = false,
  fontWeight = 'normal',
  onClick,
  name,
  type,
  hover = true,
  title,
  value
}: Props) => {
  return (
    <CustomButton
      margin={margin}
      padding={padding}
      width={width}
      fontSize={fontSize}
      color={color}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      disabled={disabled}
      fontWeight={fontWeight}
      onClick={onClick}
      name={name}
      type={type}
      hover={hover}
      title={title}
      value={value}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
