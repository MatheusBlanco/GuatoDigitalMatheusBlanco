import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Appearance, useColorScheme, View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { StyledButton } from '../StyledComponents/StyledButton';
import { StyledText } from '../StyledComponents/StyledText';

export const Footer = () => {
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const { setColorScheme } = Appearance;

  return (
    <DrawerFooter>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <DrawerFooterDivider />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <FontAwesome5
            name="question-circle"
            size={20}
            color={theme.colors.text.themeConditional.seventh}
          />
          <StyledText color="seventh">Colour Scheme</StyledText>
        </View>
      </View>
      <DrawerFooterColorSwitcherContainer>
        <StyledButton
          selected={colorScheme === 'light'}
          type="theme-switcher"
          callback={() => setColorScheme('light')}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <MaterialIcons
              name="wb-sunny"
              size={21}
              color={theme.colors.text.themeConditional.primary}
            />
            <StyledText>Light</StyledText>
          </View>
        </StyledButton>
        <StyledButton
          selected={colorScheme === 'dark'}
          type="theme-switcher"
          callback={() => setColorScheme('dark')}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Feather name="moon" size={21} color={theme.colors.text.themeConditional.primary} />
            <StyledText>Dark</StyledText>
          </View>
        </StyledButton>
      </DrawerFooterColorSwitcherContainer>
    </DrawerFooter>
  );
};

const DrawerFooter = styled.View`
  padding-horizontal: 8px;
  padding-bottom: 8px;
  gap: 16px;
`;

const DrawerFooterDivider = styled.View`
  flex: 1;
  height: 2px;
  background: ${({ theme }) => theme.colors.background.fixed.gray};
  borderr-radius: 2px;
  margin-bottom: 10px;
`;

const DrawerFooterColorSwitcherContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
  padding: 4px;
  align-items: center;
  height: 40px;
  max-width: 255px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.background.sixth};
`;
