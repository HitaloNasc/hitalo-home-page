import React from 'react';
import SimplePage from '../../templates/SimplePage';
import StackCarousel from '../../organisms/StackCarousel';

function Stacks() {
  return <SimplePage name='stacks' title='Tecnologias' content={<StackCarousel />} />;
}

export default Stacks;
