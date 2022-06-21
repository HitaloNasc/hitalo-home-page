import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  padding: 5%;
  background-color: ${({ theme }) => theme.colors.black};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.green};

  section {
    display: flex;
    flex-flow: column nowrap;
    margin-top: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletPortrait.max}) {
    padding: 10% 5%;
  }
`;

export const Title = styled.h1`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 2rem;
`;

export const Dot = styled.div`
  height: 1rem;
  width: 1rem;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 50%;
  margin-bottom: 2.5rem;
`;
