import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Footer } from './Footer';
import { Header } from './Header';
import { Items } from './Items';

export function DrawerComponent(props: DrawerContentComponentProps) {
  const { navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      <Header callback={() => navigation.navigate('Profile')} />
      <Items {...props} />
      <Footer />
    </View>
  );
}
