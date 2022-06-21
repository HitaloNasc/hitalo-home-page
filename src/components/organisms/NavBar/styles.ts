import styled from 'styled-components';

export const Nav = styled.nav`
  max-width: 100%;
  padding: 1rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};
`;
