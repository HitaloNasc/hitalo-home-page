import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: fit-content;
  flex-flow: row nowrap;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.green};
  gap: 1rem;
  padding: 1rem 2rem;
  position: relative;
  top: -2.5rem;
  margin-bottom: -2.5rem;
  z-index: 10;
`;
