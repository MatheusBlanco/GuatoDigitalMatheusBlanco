import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { DrawerContentComponentProps, DrawerItem } from '@react-navigation/drawer';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

export const Items = (props: DrawerContentComponentProps) => {
  const { navigation } = props;
  const theme = useTheme();
  const itemStyle = {
    paddingHorizontal: 6,
    borderRadius: 8,
    gap: 2,
  };
  const [isFocused, setIsFocused] = useState<'Home' | 'Categories' | 'ExtraPage'>('Home');

  const navigate = (screen: 'Home' | 'Categories' | 'ExtraPage') => {
    navigation.navigate(screen);
    setIsFocused(screen);
  };

  return (
    <ScrollView {...props}>
      <DrawerItem
        activeBackgroundColor={theme.colors.background.fifth}
        inactiveBackgroundColor={theme.colors.background.fourth}
        style={itemStyle}
        focused={isFocused === 'Home'}
        icon={({ focused }) => (
          <Ionicons
            name="home"
            size={24}
            color={theme.colors.text.themeConditional[focused ? 'sixth' : 'seventh']}
          />
        )}
        label={() => <DrawerTitle focused={true}>{'Home'}</DrawerTitle>}
        onPress={() => navigate('Home')}
      />
      <DrawerItem
        activeBackgroundColor={theme.colors.background.fifth}
        inactiveBackgroundColor={theme.colors.background.fourth}
        style={itemStyle}
        focused={isFocused === 'Categories'}
        icon={({ focused }) => (
          <MaterialIcons
            name="category"
            size={24}
            color={theme.colors.text.themeConditional[focused ? 'sixth' : 'seventh']}
          />
        )}
        label={() => <DrawerTitle focused={false}>{'Categories'}</DrawerTitle>}
        onPress={() => navigate('Categories')}
      />
      <DrawerItem
        activeBackgroundColor={theme.colors.background.fifth}
        inactiveBackgroundColor={theme.colors.background.fourth}
        style={itemStyle}
        focused={isFocused === 'ExtraPage'}
        icon={({ focused }) => (
          <FontAwesome5
            name="newspaper"
            size={24}
            color={theme.colors.text.themeConditional[focused ? 'sixth' : 'seventh']}
          />
        )}
        label={() => <DrawerTitle focused={false}>{'Brazil News'}</DrawerTitle>}
        onPress={() => navigate('ExtraPage')}
      />
    </ScrollView>
  );
};

const DrawerTitle = styled.Text<{ focused: boolean }>`
  margin-left: -20px;
  font-weight: 600;
  color: ${({ theme, focused }) =>
    theme.colors.text.themeConditional[focused ? 'sixth' : 'seventh']};
`;
