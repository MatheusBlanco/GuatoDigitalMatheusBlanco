import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Footer } from './Footer';
import { Header } from './Header';
import { Items } from './Items';

export function DrawerComponent(props: DrawerContentComponentProps) {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Items {...props} />
      <Footer />
    </View>
  );
}

const DrawerTitle = styled.Text<{ focused: boolean }>`
  margin-left: -20px;
  font-weight: 600;
  color: ${({ theme, focused }) =>
    theme.colors.text.themeConditional[focused ? 'sixth' : 'seventh']};
`;
