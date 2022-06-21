import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.instagram};
`;
