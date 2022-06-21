import styled from 'styled-components';
import Props from './interfaces';

export const Ul = styled.ul<Props>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 0 2rem;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletPortrait.max}) {
    background-color: ${({ theme }) => theme.colors.black};
    opacity: 0.9;
    flex-flow: column nowrap;
    align-self: flex-start;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: ${({ theme }) => theme.widths.small};
    margin: 0;
    gap: 2rem;
    padding-top: 5rem;
    display: flex;
    align-items: flex-end;
    transition: transform 0.3s ease-in-out;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;
