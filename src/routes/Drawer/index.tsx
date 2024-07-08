import { DrawerComponent } from '@/components/DrawerComponent';
import { Home } from '@/screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerComponent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: theme.colors.background.fourth,
            width: 303,
            paddingLeft: 20,
            paddingRight: 22,
            paddingVertical: 20,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: theme.colors.background.secondary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: theme.colors.text.themeConditional.tertiary,
              fontWeight: 'bold',
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
