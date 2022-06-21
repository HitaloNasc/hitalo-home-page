import styled from 'styled-components';
import Typography from '../../atoms/Typography';

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const LogoTypographyPrimary = styled(Typography)`
  font-size: 2rem;
  margin-block: 0;
`;

export const Dot = styled.div`
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.green};
`;
