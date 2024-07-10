import { globalStyleSheet } from '@/styles/globalStyleSheet';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import { Footer } from './Footer';
import { Header } from './Header';
import { Items } from './Items';

export function DrawerComponent(props: DrawerContentComponentProps) {
  const { navigation } = props;
  return (
    <View style={globalStyleSheet.flex}>
      <Header callback={() => navigation.navigate('Profile')} />
      <Items {...props} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1 },
});
