import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  gap: 16px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.background.primary};
`;
