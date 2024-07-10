import styled from 'styled-components/native';

export const StyledText = styled.Text<{
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  fixedColor?: boolean;
}>`
  color: ${({ color, theme, fixedColor }) =>
    fixedColor
      ? theme.colors.text.fixed[color || 'primary']
      : theme.colors.text.themeConditional[color || 'primary']};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '16px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
`;
