import styled from 'styled-components/native';
import { Avatar } from '../StyledComponents/Avatar';

export const Header = ({ callback }: { callback: () => void }) => {
  return (
    <StyledHeaderTouchableOpacity onPress={callback}>
      <Avatar size={48} />
    </StyledHeaderTouchableOpacity>
  );
};

const StyledHeaderTouchableOpacity = styled.TouchableOpacity`
  padding-top: 20px;
  padding-horizontal: 20px;
  padding-bottom: 50px;
`;
