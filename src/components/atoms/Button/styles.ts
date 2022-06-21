import styled from 'styled-components';
import Props from './interfaces';

export const CustomButton = styled.button<Props>`
  font-family: 'Inter';
  font-size: ${({ theme, fontSize }) => theme.fontSizes[fontSize ? fontSize : 'medium']};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
  width: ${({ theme, width }) => theme.widths[width ? width : 'auto']};
  margin: ${({ theme, margin }) => theme.spacing[margin ? margin : 'none']};
  padding: ${({ theme, padding }) => theme.spacing[padding ? padding : 'auto']};
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor ? backgroundColor : 'green']};
  color: ${({ theme, color }) => theme.colors[color ? color : 'black']};
  border-style: none;
  border-radius: ${({ theme, borderRadius }) =>
    theme.spacing[borderRadius ? borderRadius : 'medium']};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme, hover }) =>
    hover &&
    `
  &:hover {
    background-color: ${theme.colors.text};
  }
  `}
`;
