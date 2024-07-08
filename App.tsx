import { DrawerNavigation } from '@/routes/Drawer';
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
import { SafeAreaView, useColorScheme } from 'react-native';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';

function App() {
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
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={colorScheme === 'dark' ? darkStyles : lightStyles}>
        <DrawerNavigation />
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
