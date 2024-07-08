import { Home } from '@/screens/Home';
import { RootStackParamList } from '@/types';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { useTheme } from 'styled-components/native';

function DetailsScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Details'>;
}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Details... again" onPress={() => navigation.push('Details')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </View>
  );
}

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
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
