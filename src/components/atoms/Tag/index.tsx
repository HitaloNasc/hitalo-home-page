import React from 'react';
import Props from './interfaces';
import Typography from '../Typography';
import { Container } from './styles';

function Tag({ children, size, spacing }: Props) {
  return (
    <Container>
      <Typography size={size} color='text' spacing={spacing}>
        <span className='tagName'>{children}</span>
      </Typography>
    </Container>
  );
}

export default Tag;
