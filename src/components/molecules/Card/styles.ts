import styled from 'styled-components';
import Props from './interfaces';

export const Body = styled.div<Props>`
  min-height: 6rem;
  height: ${({ theme, heightBody }) => theme.heights[heightBody ? heightBody : 'none']};
  width: ${({ theme, width }) => theme.widths[width ? width : 'mini']};
  padding: 2rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.green};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 0.25rem;
`;

export const Footer = styled.div<Props>`
  min-height: 2rem;
  height: ${({ theme, heightFooter }) => theme.heights[heightFooter ? heightFooter : 'none']};
  width: ${({ theme, width }) => theme.widths[width ? width : 'mini']};
  padding: 0 2rem;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.green};
  background-color: ${({ theme }) => theme.colors.green};
  display: flex;
  justify-content: center;
`;
