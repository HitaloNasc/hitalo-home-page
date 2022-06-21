import styled from 'styled-components';
import Props from './interfaces';

export const BurguerContainer = styled.div<Props>`
  width: 2rem;
  height: 2rem;

  position: ${({ open }) => (open ? 'fixed' : 'absolute')};
  top: 2rem;
  right: 2rem;
  display: none;

  z-index: 20;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletPortrait.max}) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme, open, mouseOver }) =>
      open || mouseOver ? theme.colors.green : theme.colors.text};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
