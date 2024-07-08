import styled from 'styled-components/native';

export const StyledAvatar = styled.Image<{ size: number }>`
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};
  border-radius: 50px;
`;
