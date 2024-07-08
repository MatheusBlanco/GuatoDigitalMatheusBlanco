import { Container } from '@/components/StyledComponents/Container';
import { StyledInput } from '@/components/StyledComponents/StyledInput';
import { StyledMainContainer } from '@/components/StyledComponents/StyledMainContainer';
import { StyledText } from '@/components/StyledComponents/StyledText';
import { RootStackParamList } from '@/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Appearance, Button, useColorScheme, View } from 'react-native';
import styled from 'styled-components/native';

export function Home({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}) {
  const colorScheme = useColorScheme();
  const { setColorScheme } = Appearance;

  return (
    <Container>
      <StyledMainContainer>
        <StyledView>
          <View>
            <StyledText fontWeight={600} fontSize={14} color={'fourth'}>
              Hello Ashfak 👋
            </StyledText>
            <StyledText fontWeight={700} fontSize={32} color={'tertiary'}>
              What are you looking for today
            </StyledText>
          </View>
          <StyledInput
            callback={function (): void {
              throw new Error('Function not implemented.');
            }}
            navigation={navigation}
          />
        </StyledView>
      </StyledMainContainer>
      <StyledMainContainer>
        <StyledText>Cores e fontes globais, {colorScheme}</StyledText>
        <Button
          title="settar rola"
          onPress={() => {
            if (colorScheme === 'dark') setColorScheme('light');
            else setColorScheme('dark');
          }}
        ></Button>
        <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      </StyledMainContainer>
      <StyledMainContainer>
        <StyledText>Cores e fontes globais, {colorScheme}</StyledText>
        <Button
          title="settar rola"
          onPress={() => {
            if (colorScheme === 'dark') setColorScheme('light');
            else setColorScheme('dark');
          }}
        ></Button>
        <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      </StyledMainContainer>
    </Container>
  );
}

const StyledView = styled.View`
  display: flex;
  gap: 16px;
`;
