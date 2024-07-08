import styled from 'styled-components/native';

interface Props {
  children: React.ReactNode;
}

export const CustomNavHeader = ({ children }: Props) => {
  return <StyledHeader>{children}</StyledHeader>;
};

const StyledHeader = styled.View`
  height: 72px;
  background: ${({ theme }) => theme.colors.background.secondary};
  display: flex;
  flex-direction: row;
  padding: 12px;
  align-items: center;
`;
