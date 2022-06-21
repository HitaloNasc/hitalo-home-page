import React, { useState } from 'react';
import MenuList from '../MenuList';
import { BurguerContainer } from './styles';

function Burguer() {
  const initialState = {
    open: false
  };

  const [state, setState] = useState(initialState);

  const handleOnClick = () =>
    setState(prevState => {
      const newState = { ...prevState };

      const { open } = newState;
      newState.open = !open;

      return { ...newState };
    });

  return (
    <>
      <BurguerContainer open={state.open} onClick={handleOnClick}>
        <div />
        <div />
        <div />
      </BurguerContainer>
      <MenuList open={state.open} />
    </>
  );
}

export default Burguer;
