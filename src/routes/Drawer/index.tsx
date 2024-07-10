import { DrawerComponent } from '@/components/DrawerComponent';
import { CustomNavHeader } from '@/components/StyledComponents/CustomNavHeader';
import { StyledInput } from '@/components/StyledComponents/StyledInput';
import { Categories } from '@/screens/Categories';
import { Home } from '@/screens/Home';
import { Profile } from '@/screens/Profile';
import { Service } from '@/screens/Services';
import { AntDesign } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';

const Drawer = createDrawerNavigator();

export interface NavProps {
  route?: RouteProp<ParamListBase, string>;
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>;
}

export function DrawerNavigation(props: NavProps) {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor={theme.colors.background.secondary} />
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerComponent {...props} />}
        screenOptions={{
          headerTintColor: theme.colors.background.eighth,
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
            headerTitleStyle: {
              color: theme.colors.text.themeConditional.primary,
              fontWeight: 'bold',
            },
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            header: ({ navigation }) => (
              <CustomNavHeader>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.padding}>
                  <AntDesign
                    name="arrowleft"
                    size={24}
                    color={theme.colors.text.themeConditional.fifth}
                  />
                </TouchableOpacity>
              </CustomNavHeader>
            ),
          }}
        />
        <Drawer.Screen
          name="Categories"
          component={Categories}
          options={{
            header: ({ navigation }) => {
              return (
                <CustomNavHeader>
                  <StyledInput
                    hasGoBack
                    placeholder={'Search Category'}
                    value={''}
                    onChange={(e) => console.log(e)}
                    type="search"
                    navigation={navigation}
                  />
                </CustomNavHeader>
              );
            },
          }}
        />
        <Drawer.Screen
          name="Services"
          component={Service}
          options={{
            header: ({ navigation }) => {
              return (
                <CustomNavHeader>
                  <StyledInput
                    hasGoBack
                    placeholder={'Search Service'}
                    value={''}
                    onChange={(e) => console.log(e)}
                    type="search"
                    navigation={navigation}
                  />
                </CustomNavHeader>
              );
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  padding: { padding: 12 },
});
