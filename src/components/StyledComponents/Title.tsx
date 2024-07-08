import styled from 'styled-components/native';
import { StyledText } from './StyledText';

interface Props {
  children?: string;
  fontSize?: number;
  fontWeight?: number;
}

export const Title = ({ children, fontSize, fontWeight }: Props) => {
  return (
    <StyledTitle>
      <StyledViewBar></StyledViewBar>
      <StyledText fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </StyledText>
    </StyledTitle>
  );
};

const StyledTitle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;
`;

const StyledViewBar = styled.View`
  width: 4px;
  height: 20px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background.fixed.pink};
`;
