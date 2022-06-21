import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 3rem;
  text-align: center;
`;

export const Image = styled.img`
  height: 8rem;
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 2rem;
`;

export const Tags = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
  justify-content: center;
`;
