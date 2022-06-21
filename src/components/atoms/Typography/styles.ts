import styled from 'styled-components';
import Props from './interfaces';

export const Text = styled.p<Props>`
  font-family: 'Inter';
  margin: ${({ theme, spacing }) => theme.spacing[spacing ? spacing : 'none']};
  color: ${({ theme, color }) => theme.colors[color ? color : 'text']};
  font-size: ${({ theme, size }) => theme.fontSizes[size ? size : 'medium']};
  opacity: 1;
  ${({ theme, hover }) => hover && `&:hover {color: ${theme.colors.green}};`}
`;
