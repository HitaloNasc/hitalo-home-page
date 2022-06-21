import React from 'react';
import Props from './interfaces';
import { Body, Footer } from './styles';

function Card({
  children,
  footer,
  heightBody = 'none',
  heightFooter = 'none',
  width = 'mini'
}: Props) {
  return (
    <div>
      <Body heightBody={heightBody} width={width}>
        {children}
      </Body>
      <Footer heightFooter={heightFooter} width={width}>
        {footer}
      </Footer>
    </div>
  );
}

export default Card;
