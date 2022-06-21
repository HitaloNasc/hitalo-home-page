import React from 'react';
import Props from './interfaces';
import { Text } from './styles';

const Typography = ({ children, size = 'medium', color = 'text', spacing = 'none', hover = false }: Props) => {
  return (
    <Text size={size} color={color} spacing={spacing} hover={hover}>
      {children}
    </Text>
  );
};

export default Typography;
