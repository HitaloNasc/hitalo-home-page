import React from 'react';
import Props from './interfaces';
import { AiFillStar, AiOutlineTrophy } from 'react-icons/ai';
import { Container, Icon } from './styles';

function IconWithText({
  children,
  icon = 'star',
  iconColor = 'text',
  spacing,
  size = 'medium'
}: Props) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'star':
        return <AiFillStar style={{ marginBottom: '-0.08rem' }} />;
      case 'trophy':
        return <AiOutlineTrophy style={{ marginBottom: '-0.18rem' }} />;
    }
  };

  return (
    <Container size={size} spacing={spacing}>
      <Icon iconColor={iconColor}>{getIcon(icon)}</Icon>
      <span>{children}</span>
    </Container>
  );
}

export default IconWithText;
