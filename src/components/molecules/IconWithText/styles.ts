import styled from 'styled-components';
import Props from './interfaces';

export const Container = styled.div<Props>`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-flow: row nowrap;
  gap: 0.5rem;
  margin: ${({ theme, spacing }) => theme.spacing[spacing ? spacing : 'none']};
  font-size: ${({ theme, size }) => theme.fontSizes[size ? size : 'medium']};
`;

export const Icon = styled.span<Props>`
  color: ${({ theme, iconColor }) => theme.colors[iconColor ? iconColor : 'text']};
`;
