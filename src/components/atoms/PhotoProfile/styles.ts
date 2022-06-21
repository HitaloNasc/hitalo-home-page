import styled from 'styled-components';

export const Photo = styled.img`
  border-radius: 50%;
  border: 0.5rem solid ${({ theme }) => theme.colors.green};
  width: 12rem;
  height: 12rem;
  z-index: 20;
`;
