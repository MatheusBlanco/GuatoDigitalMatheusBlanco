import { HomeComponent } from '@/components/HomeComponent';
import { NavProps } from '@/routes/Drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function Home(props: NavProps) {
  const { navigation } = props;

  return <HomeComponent navigation={navigation} />;
}
