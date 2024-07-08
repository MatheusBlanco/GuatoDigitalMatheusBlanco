import { EvilIcons, Feather, Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { DrawerContentComponentProps, DrawerItem } from '@react-navigation/drawer';
import { ScrollView } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

export const Items = (props: DrawerContentComponentProps) => {
  const theme = useTheme();
  const itemStyle = {
    paddingHorizontal: 6,
    borderRadius: 8,
    gap: 2,
  };

  return (
    <ScrollView {...props}>
      <DrawerItem
        activeBackgroundColor={theme.colors.background.fifth}
        inactiveBackgroundColor={theme.colors.background.fourth}
        style={itemStyle}
        focused
        icon={({ focused }) => (
          <Ionicons
            name="calendar-clear"
            size={24}
            color={theme.colors.text.themeConditional[focused ? 'sixth' : 'seventh']}
          />
        )}
        label={() => <DrawerTitle focused={true}>{'Calendar'}</DrawerTitle>}
        onPress={() => alert('Calendar')}
      />
      <DrawerItem
        activeBackgroundColor={theme.colors.background.fifth}
        inactiveBackgroundColor={theme.colors.background.fourth}
        label={() => <DrawerTitle focused={false}>{'Payments Methods'}</DrawerTitle>}
        onPress={() => alert('Calendar')}
        style={itemStyle}
        icon={({ focused }) => (
          <Ionicons
            name="wallet-outline"
            size={24}
            color={theme.colors.text.themeConditional[focused ? 'sixth' : 'seventh']}
          />
        )}
      />
      <DrawerItem
        activeBackgroundColor={theme.colors.background.fifth}
        inactiveBackgroundColor={theme.colors.background.fourth}
        label={() => <DrawerTitle focused={false}>{'Address'}</DrawerTitle>}
        onPress={() => alert('Calendar')}
        style={itemStyle}
        icon={({ focused }) => (
          <EvilIcons
            name="location"
            size={24}
            color={theme.colors.text.themeConditional[focused ? 'sixth' : 'seventh']}
          />
        )}
      />
      <DrawerItem
        label={() => <DrawerTitle focused={false}>{'Notifications'}</DrawerTitle>}
        onPress={() => alert('Calendar')}
        activeBackgroundColor={theme.colors.background.fifth}
        inactiveBackgroundColor={theme.colors.background.fourth}
        style={itemStyle}
        icon={({ focused }) => (
          <Ionicons
            name="notifications"
            size={24}
            color={theme.colors.text.themeConditional[focused ? 'sixth' : 'seventh']}
          />
        )}
      />
      <DrawerItem
        label={() => <DrawerTitle focused={false}>{'Offers'}</DrawerTitle>}
        onPress={() => alert('Calendar')}
        activeBackgroundColor={theme.colors.background.fifth}
        inactiveBackgroundColor={theme.colors.background.fourth}
        style={itemStyle}
        icon={({ focused }) => (
          <MaterialIcons
            name="local-offer"
            size={24}
            color={theme.colors.text.themeConditional[focused ? 'sixth' : 'seventh']}
          />
        )}
      />
      <DrawerItem
        label={() => <DrawerTitle focused={false}>{'Refer a friend'}</DrawerTitle>}
        onPress={() => alert('Calendar')}
        activeBackgroundColor={theme.colors.background.fifth}
        inactiveBackgroundColor={theme.colors.background.fourth}
        style={itemStyle}
        icon={({ focused }) => (
          <Feather
            name="users"
            size={24}
            color={theme.colors.text.themeConditional[focused ? 'sixth' : 'seventh']}
          />
        )}
      />
      <DrawerItem
        label={() => <DrawerTitle focused={false}>{'Support'}</DrawerTitle>}
        style={itemStyle}
        onPress={() => alert('Calendar')}
        activeBackgroundColor={theme.colors.background.fifth}
        inactiveBackgroundColor={theme.colors.background.fourth}
        icon={({ focused }) => (
          <SimpleLineIcons
            name="phone"
            size={24}
            color={theme.colors.text.themeConditional[focused ? 'sixth' : 'seventh']}
          />
        )}
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
