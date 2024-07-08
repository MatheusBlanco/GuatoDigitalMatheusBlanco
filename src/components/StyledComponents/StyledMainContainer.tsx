import styled from 'styled-components/native';

export const StyledMainContainer = styled.View<{
  flexDirection?: string;
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background.secondary};
  padding: 16px;
`;
