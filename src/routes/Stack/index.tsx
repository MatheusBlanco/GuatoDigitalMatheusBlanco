import { Home } from '@/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

[];
const Stack = createNativeStackNavigator();

export function StackNavigation() {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
