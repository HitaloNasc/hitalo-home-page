import React from 'react';
import Typography from '../../atoms/Typography';
import { LogoContainer, Dot } from './styles';

function Logo() {
  return (
    <LogoContainer>
      <Dot /> 
      <Typography size='xlarge'>h</Typography>
      <Typography size='xmedium'>italo</Typography>
      <Typography size='xlarge'>n</Typography>
      <Typography size='xmedium'>ascimento</Typography>
    </LogoContainer>
  );
}

export default Logo;
