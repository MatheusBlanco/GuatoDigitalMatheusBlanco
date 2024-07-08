import Router from '@/routes';
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
import { useColorScheme } from 'react-native';
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
    <ThemeProvider theme={colorScheme === 'dark' ? darkStyles : lightStyles}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
