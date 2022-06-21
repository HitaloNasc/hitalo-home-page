import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  padding: 0 5% 5% 5%;
  background-color: ${({ theme }) => theme.colors.black};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.green};

  section {
    display: flex;
    align-items: center;
    flex-flow: row wrap-reverse;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletPortrait.max}) {
    padding: 10% 5%;
  }
`;

export const Twinkle = styled.span`
  animation: twinkle 1.5s linear infinite;

  @keyframes twinkle {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const TextContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;

  span {
    display: flex;
    align-items: center;
    /* margin-bottom: -3rem; */
  }

  .wrapper {
    display: flex;
    flex-flow: column nowrap;
  }

  .download {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait.max}) {
    margin-top: 8rem;
    width: 50%;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait.max}) {
    width: 50%;
  }
`;

export const Image = styled.img`
  width: 28rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletPortrait.max}) {
    margin-bottom: 5%;
  }
`;
