import styled from 'styled-components/native';

export const PriceTag = styled.View`
  padding: 4.5px 6px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.background.fixed.green};
  align-self: flex-start;
`;
