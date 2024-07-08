import styled from 'styled-components/native';

interface Props {
  type: 'theme-switcher' | 'pill';
  callback: () => void;
  children: React.ReactNode;
  selected?: boolean;
}

export const StyledButton = ({ type, callback, children, selected }: Props) => {
  switch (type) {
    case 'theme-switcher':
      return (
        <StyledButtonSwitcher selected={selected || false} onPress={callback}>
          {children}
        </StyledButtonSwitcher>
      );
    case 'pill':
      return <StyledPillButton onPress={callback}>{children}</StyledPillButton>;

    default:
      break;
  }
};

const StyledButtonSwitcher = styled.TouchableOpacity<{ selected: boolean }>`
  height: 32px;
  border-radius: 50px;
  width: 49%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, selected }) =>
    selected ? theme.colors.background.secondary : 'transparent'};
`;

const StyledPillButton = styled.TouchableOpacity`
  height: 32px;
  border-radius: 50px;
  width: 98px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.fifth};
`;
