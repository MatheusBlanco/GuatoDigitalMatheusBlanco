import styled from 'styled-components/native';

export const StyledText = styled.Text<{ color?: string; fontSize?: number; fontWeight?: number }>`
  color: ${({ color, theme }) => theme.colors.text.themeConditional[color || 'primary']};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '16px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
`;
