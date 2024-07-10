import { DrawerNavigation, NavProps } from '@/routes/Drawer';
import { queryClient } from '@/services/reactQuery';
import { globalStyleSheet } from '@/styles/globalStyleSheet';
import { darkStyles, lightStyles } from '@/styles/theme';
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
  useFonts,
} from '@expo-google-fonts/inter';
import { QueryClientProvider } from '@tanstack/react-query';
import { JSX } from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { ThemeProvider } from 'styled-components';

function App(props: JSX.IntrinsicAttributes & NavProps) {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={globalStyleSheet.flex}>
        <ThemeProvider theme={colorScheme === 'dark' ? darkStyles : lightStyles}>
          <DrawerNavigation {...props} />
        </ThemeProvider>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;
