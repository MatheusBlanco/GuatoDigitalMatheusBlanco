import styled from 'styled-components/native';

export const SimpleFlexRow = styled.View<{ align?: 'center' | 'flex-start' }>`
  flex-direction: row;
  align-items: ${({ align }) => align || 'center'};
`;

export const SimpleFlexColumn = styled.View<{ align?: 'center' | 'flex-start' }>`
  flex-direction: column;
`;
